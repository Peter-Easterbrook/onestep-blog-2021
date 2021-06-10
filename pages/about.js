import Layout from '@/components/Layout';

export default function aboutPage() {
  return (
    <Layout title='About OneStep'>
      <h1 className='text-4xl p-5 font-normal text-gray-100 bg-gray-900 border border-gray-500 rounded-lg text-center'>
        About
      </h1>
      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5 '>OneStep Blog</h3>
        <p className='mb-3'>This blog is built with Next.js and Markdown</p>
        <p className='font-medium'> Version 1.0.0</p>
      </div>
    </Layout>
  );
}
