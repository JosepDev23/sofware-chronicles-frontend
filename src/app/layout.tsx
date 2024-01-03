import type { Metadata } from 'next'
import './globals.css'
import TopMenu from '@/components/top-menu/top-menu'
import AuthContextProvider from '@/hooks/ AuthContext'

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
        <AuthContextProvider>
          <TopMenu />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
