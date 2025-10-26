This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. run `npm i` to install the packages. 

2. Create a `.env` file with the following information defined:

```
API_URL="http://localhost:3000/api"
DATABASE_URL=[connection string for database]
   If using using the docker database then use the following connection strings:
      Windows: DATABASE_URL="postgresql://postgres@host.docker.internal:5432/accelerate-mx"
      Mac:DATABASE_URL="postgresql://postgres@localhost:5432/accelerate-mx"
OPENAI_API_KEY=""
DEFAULT_OPENAI_MODEL="gpt-4o-mini"
```

3. run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
