import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import UserButtonComponent from './(components)/userButtonComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Novity Planner',
  description: 'A Corporate planning web application'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <ClerkLoading>
            <div className='flex items-center justify-center h-screen text-2xl animate-bounce'>
              Loading...
            </div>
          </ClerkLoading>

          <ClerkLoaded>
          {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
