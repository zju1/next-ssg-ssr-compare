import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About page',
  description: 'About page',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
