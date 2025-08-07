import { TrendingUp, Users, MapPin, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Sidebar() {
  const categories = [
    { name: 'Technology', count: 1234, icon: '💻' },
    { name: 'Health', count: 987, icon: '🏥' },
    { name: 'Community', count: 756, icon: '🏘️' },
    { name: 'Education', count: 543, icon: '🎓' },
    { name: 'Housing', count: 432, icon: '🏠' },
    { name: 'Transportation', count: 321, icon: '🚗' },
    { name: 'Environment', count: 234, icon: '🌲' },
    { name: 'Legal', count: 156, icon: '⚖️' }
  ]

  const trendingTopics = [
    'Winter driving tips',
    'Healthcare wait times',
    'Remote work policies',
    'Housing market trends',
    'Climate change adaptation'
  ]

  const stats = {
    totalMembers: '45,678',
    activePosts: '12,345',
    solvedProblems: '8,901'
  }

  return (
    <div className="w-80 space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Leaf className="h-5 w-5 mr-2 text-[var(--forest-green)]" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="w-full justify-between hover:bg-gray-50"
            >
              <span className="flex items-center">
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </span>
              <span className="text-sm text-gray-500">{category.count}</span>
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <TrendingUp className="h-5 w-5 mr-2 text-[var(--canadian-red)]" />
            Trending in Canada
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {trendingTopics.map((topic, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start text-left hover:bg-gray-50"
            >
              <span className="text-sm text-gray-600">#{index + 1}</span>
              <span className="ml-2 truncate">{topic}</span>
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Community Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Users className="h-5 w-5 mr-2 text-[var(--lake-blue)]" />
            Community Stats
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Members</span>
            <span className="font-semibold text-[var(--canadian-red)]">{stats.totalMembers}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Active Posts</span>
            <span className="font-semibold text-[var(--forest-green)]">{stats.activePosts}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Solved Problems</span>
            <span className="font-semibold text-[var(--lake-blue)]">{stats.solvedProblems}</span>
          </div>
        </CardContent>
      </Card>

      {/* Location Widget */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <MapPin className="h-5 w-5 mr-2 text-[var(--canadian-red)]" />
            Your Province
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full">
            Select Province
          </Button>
          <p className="text-xs text-gray-500 mt-2">
            Get location-specific solutions and connect with neighbors
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

