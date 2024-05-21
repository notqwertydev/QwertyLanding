// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Footer from '@/components/site-footer'
import { ModalProvider } from './context/ModelContext'
import Modal from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] })
const lol = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cottons and Colors',
  description: 'Cottons and Colors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="twitter:card" content="QWERTY" />
        <meta property="og:title" content="QWERTY" />
        <meta property="og:description" content="QWERTY" />
        <meta property="og:image" content="/screen.png" />
      </head>
      <body className={inter.className}>
        <ModalProvider>
          <div className='bg-[#ffffff] flex flex-col min-h-screen mx-auto 2xl:max-w-screen-3xl'>
            <NavBar />
            <div className='px-0 mx-8 mt-24'>
              {children}
            </div>
            <Footer />
          </div>
          <Modal />
        </ModalProvider>
      </body>
    </html>
  )
}
