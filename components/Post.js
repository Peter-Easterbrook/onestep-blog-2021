import Link from 'next/link';
import Image from 'next/image';
import CategoryLabel from './CategoryLabel';

export default function Post({ post, compact }) {
  return (
    <div className='w-full px-10 py-6 bg-white rounded-lg shadow-lg mt-6 mx-2'>
      {!compact && (
        <Image
          src={post.frontmatter.cover_image}
          alt='Someone special'
          width={600}
          height={420}
          className='mb-4 rounded'
        />
      )}

      <div className='flex justify-between items-center'>
        <span className='font-light text-gray-600'>
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category} </CategoryLabel>
      </div>
      <div className='mt-2'>
        <Link href={`/blog/${post.slug}`}>
          <a className='text-xl text-gray-700 text-semibold hover:underline'>
            {post.frontmatter.title}
          </a>
        </Link>
        <p className='mt-2 text-gray-500'>{post.frontmatter.excerpt}</p>
      </div>

      {!compact && (
        <div className='flex justify-between items-center'>
          <Link href={`/blog/${post.slug}`}>
            <a className='text-gray-900'>
              <div className='hover:text-blue-600'>Read More</div>
            </a>
          </Link>
          <div className='flex items-center'>
            <img
              src={post.frontmatter.author_image}
              alt='Author'
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            />
            <div className='text-gray-700 font-medium '>
              {post.frontmatter.author}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
