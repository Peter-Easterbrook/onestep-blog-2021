import Head from 'next/head';
import Header from './Header';

export default function LayoutPage({
  title = 'Welcome to OneStep WebBlog',
  keywords = 'web development, coding, frontend, fullstack, coding',
  description = 'For all the latest tips & tricks in web development',
  children,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  );
}
