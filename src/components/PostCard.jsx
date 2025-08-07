import { Heart, MessageCircle, Flag, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function PostCard({ post, onLike }) {
  const {
    id,
    title,
    excerpt,
    author,
    category,
    createdAt,
    likes,
    replies,
    status = 'open'
  } = post

  const getStatusColor = (status) => {
    switch (status) {
      case 'solved':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-blue-100 text-blue-800'
    }
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'bg-purple-100 text-purple-800',
      'Health': 'bg-green-100 text-green-800',
      'Community': 'bg-blue-100 text-blue-800',
      'Education': 'bg-orange-100 text-orange-800',
      'Housing': 'bg-red-100 text-red-800',
      'Transportation': 'bg-indigo-100 text-indigo-800',
      'Legal': 'bg-gray-100 text-gray-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Badge className={getStatusColor(status)}>
            {status === 'solved' ? '✓ Solved' : status === 'in-progress' ? '⏳ In Progress' : '🔍 Open'}
          </Badge>
          <Badge variant="outline" className={getCategoryColor(category)}>
            {category}
          </Badge>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
          <Flag className="h-4 w-4" />
        </Button>
      </div>

      {/* Title and Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-[var(--canadian-red)] cursor-pointer">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{createdAt}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-500 hover:text-red-500"
            onClick={onLike}
          >
            <Heart className="h-4 w-4 mr-1" />
            {likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-500">
            <MessageCircle className="h-4 w-4 mr-1" />
            {replies}
          </Button>
        </div>
      </div>
    </div>
  )
}

