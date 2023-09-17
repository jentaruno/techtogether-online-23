import 'tailwindcss/tailwind.css';
import "@styles/globals.css";
import {UserProvider} from '@auth0/nextjs-auth0/client';

import {Inter} from 'next/font/google'
import NavbarMain from "@components/NavbarMain";
import React from "react";


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Create Next App',
    description: '',
}

const RootLayout = ({children}) => {
    return (

        <html lang="en">
        <UserProvider>
            <body>
            <div className="flex flex-col h-screen w-full bg-primary-lightblue">
                <NavbarMain/>
                {children}
            </div>
            </body>
        </UserProvider>
        </html>

    )
}

export default RootLayout