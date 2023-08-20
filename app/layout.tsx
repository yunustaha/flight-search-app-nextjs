import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })

export const metadata: Metadata = {
  title: 'Flight Search Application',
  description: 'Explore and book flights effortlessly with our Flight Search App. Compare options, check real-time availability, and secure your journey with ease. Your ultimate travel companion for seamless flying',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className='relative'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
