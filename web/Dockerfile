FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY .buildenv .env
RUN npx prisma generate
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV APP_CONTAINERIZED=1
ENV HOSTNAME=0.0.0.0
RUN apk add --no-cache curl
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./dist/public
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/server.sh ./dist/server.sh
RUN chmod +x ./dist/server.sh
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./dist/
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./dist/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/.prisma/client ./dist/node_modules/.prisma/client
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/prisma ./dist/node_modules/prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/@prisma ./dist/node_modules/@prisma
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./dist/prisma
USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["sh", "./dist/server.sh"]
