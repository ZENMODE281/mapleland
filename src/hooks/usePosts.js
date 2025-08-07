import { useState, useEffect } from 'react'

const API_BASE_URL = '/api'

export function usePosts(filter = 'all') {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [filter])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const url = filter === 'all' 
        ? `${API_BASE_URL}/posts`
        : `${API_BASE_URL}/posts?status=${filter}`
      
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      
      const data = await response.json()
      setPosts(data.posts || [])
      setError(null)
    } catch (err) {
      setError(err.message)
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  const likePost = async (postId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (!response.ok) {
        throw new Error('Failed to like post')
      }
      
      const data = await response.json()
      
      // Update the post in the local state
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === postId 
            ? { ...post, likes: data.likes }
            : post
        )
      )
    } catch (err) {
      console.error('Error liking post:', err)
    }
  }

  const createPost = async (postData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
      
      if (!response.ok) {
        throw new Error('Failed to create post')
      }
      
      const newPost = await response.json()
      setPosts(prevPosts => [newPost, ...prevPosts])
      return newPost
    } catch (err) {
      console.error('Error creating post:', err)
      throw err
    }
  }

  return {
    posts,
    loading,
    error,
    likePost,
    createPost,
    refetch: fetchPosts
  }
}

