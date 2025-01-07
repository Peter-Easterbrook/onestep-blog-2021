import Post from './Post';

export default function SearchResults({ results = [] }) {
  if (!Array.isArray(results) || results.length === 0) return null;

  return (
    <div
      className='absolute top-20 right-0 md:right-10 z-10 border-2 border-gray-500 bg-white text-black w-full rounded-2xl homepage max-h-[600px]'
      role='region'
      aria-label='Search results'
    >
      <div className='py-4 px-4'>
        <h2 className='text-2xl mb-0 sticky top-0 bg-white' role='status'>
          {results.length} {results.length === 1 ? 'Result' : 'Results'}
        </h2>
        <div className='overflow-y-auto max-h-[500px] scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100'>
          {results.map((result, index) => (
            <Post
              key={result.id || `search-result-${index}`}
              post={result}
              compact={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
