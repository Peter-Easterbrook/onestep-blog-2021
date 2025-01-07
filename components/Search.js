import { useCallback, useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchResults from './SearchResults';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const getResults = useCallback(async () => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(searchTerm.trim())}`
      );
      if (!res.ok) throw new Error('Search failed');
      const { results } = await res.json();
      console.log('Search results:', results); // Debug log
      setSearchResults(Array.isArray(results) ? results : []);
    } catch (err) {
      console.error('Search error:', err); // Debug log
      setError(err.message);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getResults();
    }, 300); // Debounce delay

    return () => clearTimeout(timeoutId);
  }, [getResults]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults();
  };

  const handleInputClick = () => {
    inputRef.current.select(); // Select all text when clicked
  };

  const handleClear = () => {
    setSearchTerm('');
    setSearchResults([]);
    inputRef.current.focus();
  };

  return (
    <div className='relative p-3 bg-gray-800'>
      <div className='container mx-auto flex items-center justify-center md:justify-end'>
        <div className='relative text-gray-600 w-72'>
          <form onSubmit={handleSubmit} role='search'>
            <input
              ref={inputRef}
              type='search'
              name='search'
              id='search'
              className='bg-white h-10 px-5 pr-10 rounded-full shadow-inner text-sm focus:outline-none w-72'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={handleInputClick}
              onFocus={handleInputClick}
              placeholder='Search Posts...'
              aria-label='Search posts'
              disabled={isLoading}
            />
            {searchTerm && (
              <button
                type='button'
                onClick={handleClear}
                className='absolute top-0 right-8 mt-3 mr-4'
                aria-label='Clear search'
              >
                ×
              </button>
            )}
            <button
              type='submit'
              aria-label='Submit search'
              className='absolute top-0 right-0 mt-3 mr-4'
              disabled={isLoading}
            >
              <FaSearch className='text-black' />
            </button>
          </form>
        </div>
      </div>

      {/* {process.env.NODE_ENV === 'development' && (
        <div className='text-white text-xs mt-2'>
          Results count: {searchResults.length}
        </div>
      )} */}

      {error && (
        <div className='text-red-500 text-center mt-2' role='alert'>
          {error}
        </div>
      )}
      {isLoading ? (
        <div className='text-white text-center mt-2' role='status'>
          Searching...
        </div>
      ) : (
        searchResults.length > 0 && <SearchResults results={searchResults} />
      )}
    </div>
  );
}
