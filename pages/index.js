import Layout from '@/components/Layout';
import Post from '@/components/Post';
import { getPosts } from '@/lib/posts';
import Link from 'next/link';

export default function HomePage({ posts }) {
  return (
    <Layout>
      <div className='homepage'>
        <h1 className='text-4xl p-5 font-normal text-gray-100 bg-gray-700 border border-gray-700 rounded-lg text-center'>
          Latest Posts
        </h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <Link
          href='/blog'
          className='block text-center border border-gray-500 text-gray-100 rounded-md py-4 my-5 transition duration-500 ease select-none bg-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none shadow-lg w-full'
        >
          All Posts
        </Link>
      </div>
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
