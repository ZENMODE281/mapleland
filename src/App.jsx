import { useState } from 'react'
import Header from './components/Header'
import PostCard from './components/PostCard'
import Sidebar from './components/Sidebar'
import { Button } from '@/components/ui/button'
import { usePosts } from './hooks/usePosts'
import './App.css'

function App() {
  const [filter, setFilter] = useState('all')
  const { posts, loading, error, likePost } = usePosts(filter)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--canadian-red)] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading posts: {error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Filter Buttons */}
            <div className="mb-6">
              <div className="flex space-x-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilter('all')}
                  className={filter === 'all' ? 'bg-[var(--canadian-red)] hover:bg-red-700' : ''}
                >
                  All Posts ({posts.length})
                </Button>
                <Button
                  variant={filter === 'open' ? 'default' : 'outline'}
                  onClick={() => setFilter('open')}
                  className={filter === 'open' ? 'bg-[var(--canadian-red)] hover:bg-red-700' : ''}
                >
                  Open
                </Button>
                <Button
                  variant={filter === 'solved' ? 'default' : 'outline'}
                  onClick={() => setFilter('solved')}
                  className={filter === 'solved' ? 'bg-[var(--canadian-red)] hover:bg-red-700' : ''}
                >
                  Solved
                </Button>
                <Button
                  variant={filter === 'in-progress' ? 'default' : 'outline'}
                  onClick={() => setFilter('in-progress')}
                  className={filter === 'in-progress' ? 'bg-[var(--canadian-red)] hover:bg-red-700' : ''}
                >
                  In Progress
                </Button>
              </div>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No posts found for this filter.</p>
                  <Button 
                    className="mt-4 bg-[var(--canadian-red)] hover:bg-red-700"
                    onClick={() => setFilter('all')}
                  >
                    View All Posts
                  </Button>
                </div>
              ) : (
                posts.map(post => (
                  <PostCard 
                    key={post.id} 
                    post={{
                      ...post,
                      createdAt: new Date(post.created_at).toLocaleDateString('en-CA', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })
                    }} 
                    onLike={() => likePost(post.id)}
                  />
                ))
              )}
            </div>

            {/* Load More Button */}
            {posts.length > 0 && (
              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  Load More Posts
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App
