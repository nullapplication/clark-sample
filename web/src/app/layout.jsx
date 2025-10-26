import { Inter, Roboto, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './_components/menu/menu';
import './globals.css';
import ThemeToggle from './_components/ui/theme-toggle/theme-toggle';
import AIChat from './_components/chat/chat';
import { Suspense } from 'react';
import { SWRConfig } from 'swr';
import { AppInit } from './_components/core/app-init/app-init';

const inter = Inter({
   variable: '--font-inter',
   subsets: ['latin'],
   weight: '400',
});

const roboto = Roboto({
   variable: '--font-roboto',
   subsets: ['latin'],
   weight: '400',
});

const jetbrainsMono = JetBrains_Mono({
   variable: '--font-jetbrains-mono',
   subsets: ['latin'],
});

export const metadata = {
   title: 'Accelerate MX',
   description: 'Administration system for Accelerate MX.',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${inter.variable} ${roboto.variable} ${jetbrainsMono.variable}`}
         >
            <div className="container">
               <div className="sidebar">
                  <div>
                     <Link href="/">
                        <Image
                           src="/logo_understated.png"
                           alt="Accelerate MX"
                           width={49}
                           height={34}
                           priority
                        />
                     </Link>
                     <NavMenu />
                  </div>
                  <ThemeToggle />
               </div>
               <main className="main">
                  <AppInit>
                     <SWRConfig>{children}</SWRConfig>
                  </AppInit>
               </main>
               <Suspense fallback={<div>Loading chat...</div>}>
                  <AIChat />
               </Suspense>
            </div>
         </body>
      </html>
   );
}
