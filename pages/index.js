import Link from 'next/link';
import Post from '@/components/Post';
import Layout from '@/components/Layout';
import { getPosts } from '@/lib/posts';

export default function HomePage({ posts }) {
  return (
    <Layout>
      <h1 className='text-4xl p-5 font-normal text-gray-100 bg-gray-900 border border-gray-500 rounded-lg text-center'>
        Latest Posts
      </h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Link href='/blog'>
        <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none bg-gray-100 hover:text-white hover:bg-gray-900 focus:outline-none shadow-lg w-full'>
          All Posts
        </a>
      </Link>
    </Layout>
  );
}
export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 4),
    },
  };
}
