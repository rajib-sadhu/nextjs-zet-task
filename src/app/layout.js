'use client'
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZET : Become a Certified Financial Advisor and Earn Big',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {



  return (
    <html data-theme="cupcake" lang="en">
      <Head>
      <link rel="shortcut icon" href="https://zetapp.in/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
