import type { Metadata } from 'next'
import TopMenu from '@/components/top-menu/top-menu'
import AuthContextProvider from '@/hooks/ AuthContext'
import './globals.css'

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
