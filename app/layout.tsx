import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NMA Website',
  description: 'Nyiha Mathenge Advocates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en"
      data-theme='cupcake'
    >
      <body className=''>{children}</body>
    </html>
  )
}
