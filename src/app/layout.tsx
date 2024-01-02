import type { Metadata } from 'next'
import './globals.css'
import TopMenu from '@/components/top-menu/top-menu'

export const metadata: Metadata = {
  title: 'Software Chronicles',
  description: 'Software Chronicles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TopMenu />
        {children}
      </body>
    </html>
  )
}
