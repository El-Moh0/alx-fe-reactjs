import { useState } from 'react'
import PostsComponent from './components/PostsComponent'

// Import React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a QueryClient instance
const queryClient = new QueryClient()

export default function App() {
  const [showPosts, setShowPosts] = useState(true)

  return (
    // Wrap your app in QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: '20px' }}>
        <h1>React Query Demo</h1>

        <button onClick={() => setShowPosts(!showPosts)}>
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>

        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  )
}