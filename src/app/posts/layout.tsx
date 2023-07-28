import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts page',
  description: 'Posts page',
}

export default function PostsLayout({
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
