import 'tailwindcss/tailwind.css';
import "@styles/globals.css";
import {UserProvider} from '@auth0/nextjs-auth0/client';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: '',
}

const RootLayout = ({children}) => {
  return (
    
    <html lang="en">
      <UserProvider>
        <body>
            <div className="flex flex-col h-full w-screen">
                
                <main className=''>
                    {children}
                </main>
                
            </div>
        </body>
        </UserProvider>
    </html>

  )
}

export default RootLayout