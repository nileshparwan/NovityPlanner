import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='flex justify-center sm:justify-start items-center gap-4'>
            <Image
              priority
              src='/assets/images/novity.svg'
              width={60}
              height={50}
              alt='Novity'
            />
            <p className='text-xl font-bold tracking-wider'>Novity Planner</p>
          </div>

          <p className='mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400'>
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
