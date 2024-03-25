import type { Metadata } from 'next'
import TopMenu from '@/components/top-menu/top-menu'
import AuthContextProvider from '@/hooks/AuthContext'
import './globals.css'
import LocalStorageWrapper from '@/components/localstorage-wrapper/localstorage-wrapper'
import BackgroundSVG from '@/components/background-svg/background-svg'

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
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:wght@200;300;400;700;900&display=swap"
        />
        <AuthContextProvider>
          <LocalStorageWrapper>
            <BackgroundSVG />
            <TopMenu />
            <main>{children}</main>
          </LocalStorageWrapper>
        </AuthContextProvider>
      </body>
    </html>
  )
}
