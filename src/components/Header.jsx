import { Search, User, Bell, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import maplelandLogo from '../assets/mapleland_logo.png'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={maplelandLogo} 
              alt="Mapleland" 
              className="h-10 w-auto"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search problems and solutions..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Categories
            </Button>
            <Button variant="ghost" size="sm">
              Recent
            </Button>
            <Button variant="ghost" size="sm">
              Popular
            </Button>
            
            {/* Action Buttons */}
            <Button className="bg-[var(--canadian-red)] hover:bg-red-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Post Problem
            </Button>
            
            {/* User Menu */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

