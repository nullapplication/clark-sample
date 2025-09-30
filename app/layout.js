import '../styles/globals.css'

export const metadata = {
  title: 'Clark Sample',
  description: 'A Next.js 15 App Router application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
