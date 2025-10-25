import React, { useState, useEffect } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const POSTS_PER_PAGE = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch posts.');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-500 ease-in-out">
      <h2 className="text-2xl font-bold mb-4">API Data</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search posts..."
        className="w-full mb-4 px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {loading && <p className="text-gray-500 dark:text-gray-400">Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4">
        {paginated.map((post) => (
          <li key={post.id} className="border p-4 rounded dark:border-gray-700 animate-fade-in">
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50 transition-transform duration-200 hover:scale-105"
        >
          Previous
        </button>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50 transition-transform duration-200 hover:scale-105"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;