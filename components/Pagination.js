import Link from 'next/link';

export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;
  return (
    <div className='mt-6 mx-auto'>
      <ul className='flex pl-0 list-none my-2'>
        {!isFirst && (
          <Link href={prevPage}>
            <li className='relative block py-2 px-3 leading-tight bg-gray-700 border border-white text-white mr-1 hover:bg-white hover:text-black hover:border-black cursor-pointer rounded'>
              Previous
            </li>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`}>
            <li className='relative block py-2 px-3 leading-tight bg-gray-700 border border-white text-white mr-1 hover:bg-white hover:text-black hover:border-black cursor-pointer rounded'>
              {i + 1}
            </li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li className='relative block py-2 px-3 leading-tight bg-gray-700 border border-white text-white mr-1 hover:bg-white hover:text-black hover:border-black cursor-pointer rounded'>
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
