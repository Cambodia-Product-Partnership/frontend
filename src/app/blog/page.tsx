'use client'
import React from 'react'
import { Menu, X, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default function Blog() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([])

  React.useEffect(() => {
    fetch('/api/blog-posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error('Error fetching blog posts:', error))
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 bg-green-700 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-green-600">
          <Link href="/" className="text-2xl font-semibold hover:text-green-200 transition duration-300">
            CPP
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden hover:text-green-200 transition duration-300">
            <X size={24} />
          </button>
        </div>
        <nav className="mt-8">
          <Link href="/" className="block py-3 px-6 hover:bg-green-800 text-lg transition duration-300">
            Home
          </Link>
          <Link href="/products-market" className="block py-3 px-6 hover:bg-green-800 text-lg transition duration-300">
            Products & Market
          </Link>
          <Link href="/farmer-profiles" className="block py-3 px-6 hover:bg-green-800 text-lg transition duration-300">
            Farmer Profiles
          </Link>
          <Link href="/blog" className="block py-3 px-6 bg-green-800 text-lg font-semibold">
            Blog
          </Link>
          <Link href="/get-involved" className="block py-3 px-6 hover:bg-green-800 text-lg transition duration-300">
            Get Involved
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-600 hover:text-gray-900 transition duration-300">
              <Menu size={24} />
            </button>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {post.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">{post.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p>&copy; 2023 Cambodia Product Partnership. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}