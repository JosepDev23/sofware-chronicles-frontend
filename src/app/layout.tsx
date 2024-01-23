import type { Metadata } from 'next'
import TopMenu from '@/components/top-menu/top-menu'
import AuthContextProvider from '@/hooks/AuthContext'
import './globals.css'
import LocalStorageWrapper from '@/components/localstorage-wrapper/localstorage-wrapper'

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
          <LocalStorageWrapper>
            <TopMenu />
            <main>{children}</main>
          </LocalStorageWrapper>
        </AuthContextProvider>
      </body>
    </html>
  )
}
