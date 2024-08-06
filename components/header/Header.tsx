'use client';

import Link from 'next/link';
import type React from 'react';
import { Search, Bell } from 'lucide-react';
import { type ReactNode, useCallback, useState } from 'react';
import { Button, buttonVariants } from '../ui/button';
import Nav from './Nav';
import Image from 'next/image';

interface IHeader {
  isLogged: boolean;
  userButtonComponent?: ReactNode;
}

export const Header: React.FC<IHeader> = ({
  isLogged,
  userButtonComponent
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mobileMenuHandler = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <header className='bg-gray-50 dark:bg-gray-900 shadow-md w-full px-4'>
      <div className='flex h-16 items-center justify-between md:gap-8'>
        <Link href='/' className='block'>
          <span className='sr-only'>Home</span>
          <Image
            priority
            src='/assets/images/novity.svg'
            width={60}
            height={50}
            alt='Novity'
          />
        </Link>

        <div className='hidden md:flex md:flex-1 md:items-center md:justify-between'>
          <Nav className='flex items-center gap-6 text-sm' />
        </div>

        <div className='flex gap-3 md:gap-6 items-center'>
          <div>{userButtonComponent && userButtonComponent}</div>

          <Button
            className='block rounded-md p-2.5 md:hidden'
            aria-expanded={isOpen}
            onClick={mobileMenuHandler}
          >
            <span className='sr-only'>Toggle menu</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <title>something</title>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </Button>

          <div className='hidden md:flex space-x-2'>
            {isLogged ? (
              <Link
                href='/'
                className={`rounded-md px-5 py-2.5 text-sm font-medium ${buttonVariants({ variant: 'default' })}`}
              >
                Profile
              </Link>
            ) : (
              <Link
                href='/sign-in'
                className={`text-sm ${buttonVariants({ variant: 'default' })}`}
              >
                Sign in
              </Link>
            )}
          </div>
          <Search />
          <Bell />
        </div>
      </div>

      <div
        className={`mobile-menu md:hidden ${isOpen ? 'flex flex-col' : 'hidden'}`}
      >
        <div className='space-x-2 text-sm border-b'>
          {isLogged ? (
            <Link
              href='/'
              className={`rounded-md ${buttonVariants({ variant: 'link' })}`}
            >
              Profile
            </Link>
          ) : (
            <Link
              href='/sign-in'
              className={`text-sm ${buttonVariants({ variant: 'link' })}`}
            >
              Sign in
            </Link>
          )}
        </div>
        <Nav className='flex flex-col gap-2 text-sm' />
      </div>
    </header>
  );
};
