import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Footer, { SiteFooter } from '@/components/site-footer'

const inter = Inter({ subsets: ['latin'] })

const lol = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'qwerty',
  description: 'QWERTY',
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


        <div className='bg-[#0f1014] flex flex-col min-h-screen mx-auto 2xl:max-w-screen-3xl'>

          <NavBar />
          <div className='px-0'>
            {children}
          </div>
          <Footer /> 
        </div>


      </body>
    </html>
  )
}
