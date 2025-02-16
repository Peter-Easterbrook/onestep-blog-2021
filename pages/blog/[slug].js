import CategoryLabel from '@/components/CategoryLabel';
import Layout from '@/components/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import path from 'path';
import { BsArrowLeftCircle } from 'react-icons/bs';

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      <div className='relative block w-11 px-2 py-2 leading-tight bg-gray-700 border border-white text-white hover:bg-white hover:text-black hover:border-black cursor-pointer rounded'>
        <Link href='/blog'>
          <BsArrowLeftCircle style={{ width: '1.5rem', height: '1.5rem' }} />
        </Link>
      </div>
      <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6 border border-gray-700'>
        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-4xl mb-7'>{title} </h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt='topic' className='w-full rounded' />
        <div className='flex justify-between items-center bg-gray-100 p-2 my-8 rounded'>
          <div className='flex items-center'>
            <img
              src={author_image}
              alt='author'
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            />
            <h4>{author} </h4>
          </div>
          <div className='ml-auto mr-1'> {date}</div>
        </div>
        <div className='blog-text mt-2'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
