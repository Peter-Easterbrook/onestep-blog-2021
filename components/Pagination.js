import Link from 'next/link';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;
  return (
    <div className='mt-6 mx-auto'>
      <ul
        className='flex pl-0 list-none my-2'
        style={{ justifyContent: 'center' }}
      >
        {!isFirst && (
          <Link href={prevPage}>
            <li
              // key={currentPage - 1}
              key={`prev-${currentPage - 1}`}
              className='relative block py-3 px-3 leading-tight bg-gray-700 border border-white text-white mr-1 hover:bg-white hover:text-black hover:border-black cursor-pointer rounded'
            >
              <BsArrowLeftCircle />
            </li>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`} key={`page-${i + 1}`}>
            <li
              // key={currentPage}
              key={`page-${i + 1}`}
              className='relative block py-2 px-4 text-lg leading-tight bg-gray-700 border border-white text-white mr-1 hover:bg-white hover:text-black hover:border-black cursor-pointer rounded'
            >
              {i + 1}
            </li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li
              // key={currentPage + 1}
              key={`next-${currentPage + 1}`}
              className='relative block py-3 px-3 leading-tight bg-gray-700 border border-white text-white mr-1 hover:bg-white hover:text-black hover:border-black cursor-pointer rounded'
            >
              <BsArrowRightCircle />
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
