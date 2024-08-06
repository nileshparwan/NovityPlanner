'use client';

import { Header } from '@/components/header/Header';
import UserButtonComponent from './(components)/userButtonComponent';
import Footer from '@/components/footer/Footer';
import { useAuth } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();
  return (
    <>
      <Header
        isLogged={isSignedIn as boolean}
        userButtonComponent={<UserButtonComponent />}
      />

      <main className='flex-1 flex items-center justify-center'>{/*  */}</main>
      <Footer />
    </>
  );
}
