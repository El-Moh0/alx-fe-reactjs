import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  return response.json()
}

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,

    // Advanced options
    staleTime: 1000 * 60 * 2,            // 2 minutes fresh data
    cacheTime: 1000 * 60 * 5,            // 5 minutes in cache
    refetchOnWindowFocus: false,         // don't refetch when switching tabs
    keepPreviousData: true,              // useful if you implement pagination
  })

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div style={{ padding: '20px' }}>
      <h2>Posts</h2>

      <button onClick={() => refetch()}>
        🔄 Refetch Posts
      </button>

      {isFetching && <p>Updating...</p>}

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: '12px' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}