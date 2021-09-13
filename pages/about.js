import Layout from '@/components/Layout';

export default function aboutPage() {
  return (
    <Layout title='About OneStep'>
      <h1 className='text-4xl p-5 font-normal text-gray-100 bg-gray-800 border border-white rounded-lg text-center lg:w-3/12 md:w-6/12 sm:w-9/12 mx-auto'>
        About
      </h1>
      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6 lg:w-3/12 md:w-6/12 sm:w-9/12  mx-auto border border-gray-700'>
        <h3 className='text-2xl mb-5 '>OneStep Blog</h3>
        <p className='mb-3'>This blog is built with: </p>
        <ul>
          <li>NextJS</li>
          <li>Markdown</li>
          <li>ReactJS</li>
          <li>Gray-Matter</li>
          <li>Marked</li>
          <li>Husky</li>
          <li>PostCSS</li>
          <li>Tailwind</li>
        </ul>
        <p className='font-medium'> Version 1.0.0</p>
      </div>
    </Layout>
  );
}
