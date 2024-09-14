'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import { Menu, X, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Button } from "@/components/ui/button"

export default function BlogPost() {
  const { slug } = useParams() // Extracts the dynamic route parameter
  const [postContent, setPostContent] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  useEffect(() => {
    if (slug) {
      fetch(`/api/blog-post?slug=${slug}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setPostContent(data.content)
        })
        .catch(error => console.error('Error fetching blog post:', error))
    }
  }, [slug])

  const customComponents = {
    h1: ({ node, ...props }) => <h1 className="text-4xl font-bold my-4" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold my-4" {...props} />,
    p: ({ node, ...props }) => <p className="my-2 text-lg leading-relaxed" {...props} />,
    table: ({ node, ...props }) => (
      <table className="w-full table-auto border-collapse border border-gray-300 my-4" {...props} />
    ),
    thead: ({ node, ...props }) => (
      <thead className="bg-gray-200" {...props} />
    ),
    th: ({ node, ...props }) => (
      <th className="border border-gray-300 px-4 py-2 text-left" {...props} />
    ),
    td: ({ node, ...props }) => (
      <td className="border border-gray-300 px-4 py-2" {...props} />
    ),
    tr: ({ node, ...props }) => (
      <tr className="even:bg-gray-100" {...props} />
    ),
    a: ({ node, ...props }) => (
      <a className="text-blue-600 hover:underline" {...props} />
    )
  }

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
      <div className="flex-1">
        {/* Header */}
        <header className="bg-gray">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-600 hover:text-gray-900 transition duration-300">
              <Menu size={24} />
            </button>
          </div>
        </header>

        <div className="max-w-3xl text-black mx-auto py-8 px-4">
          <ReactMarkdown components={customComponents} remarkPlugins={[remarkGfm]}>
            {postContent}
          </ReactMarkdown>
        </div>

        <footer className="bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p>&copy; 2023 Cambodia Product Partnership. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
