import Image from 'next/image';
import Layout from '@/components/Layout';

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center mt-20 '>
        <Image src='/images/logo.png' width={150} height={150} />
        <h1 className='text-6xl my-5 p-5 font-normal text-gray-100 bg-gray-800 border border-gray-500 rounded-lg text-center shadow-lg'>
          Hmm?
        </h1>
        <h2 className='text-4xl mb-5  p-5 font-normal text-gray-100 bg-gray-800 border border-gray-500 rounded-lg text-center shadow-lg'>
          This page isn't the page you're looking for!
        </h2>
      </div>
    </Layout>
  );
}
