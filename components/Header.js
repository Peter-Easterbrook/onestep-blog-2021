import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';

export default function Header() {
  return (
    <header className='bg-gray-800 text-gray-100 shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='https://pe-wd-resume.vercel.app/'>
          <a className='flex md:w-2/5 items-center md:justify-start mb-4 md:mb-0'>
            <span className='mr-3 text-4xl'>OneStep </span>
            <Image src='/images/logo.png' width={100} height={100} alt='logo' />
            <span className='ml-3 text-4xl'> Blog</span>
          </a>
        </Link>
        <nav className='flex flex-wrap md:w-3/5 items-center justify-end text-base md:ml-auto'>
          <Link href='/blog'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              About
            </a>
          </Link>
          <Search />
        </nav>
      </div>
    </header>
  );
}
