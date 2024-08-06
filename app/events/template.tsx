'use client'

import Footer from '@/components/footer/Footer';
import UserButtonComponent from '../(components)/userButtonComponent';
import { useAuth } from '@clerk/nextjs';
import { Header } from '@/components/header/Header';

export default function Template({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();
  return (
    <>
       <Header
        isLogged={isSignedIn as boolean}
        userButtonComponent={<UserButtonComponent />}
      />
      <main className='flex-1 flex items-center justify-center'>
        {children}
      </main>
      <Footer />
    </>
  );
}
