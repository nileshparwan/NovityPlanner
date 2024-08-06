import Footer from '@/components/footer/Footer';
import { PageHeader } from '@/components/pageHeader/PageHeader';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader />
      <main className='flex-1 flex items-center justify-center'>
        {children}
      </main>
      <Footer />
    </>
  );
}
