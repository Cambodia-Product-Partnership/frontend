'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import { Menu, X, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Button } from "@/components/ui/button"
import { GetStaticProps, GetStaticPaths } from 'next';


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
    h1: (props: React.ComponentPropsWithoutRef<'h1'>) => <h1 className="text-4xl font-bold my-4" {...props} />,
    h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 className="text-3xl font-semibold my-4" {...props} />,
    p: (props: React.ComponentPropsWithoutRef<'p'>) => <p className="my-2 text-lg leading-relaxed" {...props} />,
    table: (props: React.ComponentPropsWithoutRef<'table'>) => (
      <table className="w-full table-auto border-collapse border border-gray-300 my-4" {...props} />
    ),
    thead: (props: React.ComponentPropsWithoutRef<'thead'>) => <thead className="bg-gray-200" {...props} />,
    th: (props: React.ComponentPropsWithoutRef<'th'>) => (
      <th className="border border-gray-300 px-4 py-2 text-left" {...props} />
    ),
    td: (props: React.ComponentPropsWithoutRef<'td'>) => (
      <td className="border border-gray-300 px-4 py-2" {...props} />
    ),
    tr: (props: React.ComponentPropsWithoutRef<'tr'>) => <tr className="even:bg-gray-100" {...props} />,
    a: (props: React.ComponentPropsWithoutRef<'a'>) => <a className="text-blue-600 hover:underline" {...props} />,
  };

  return (
    <div>
    <div className="flex min-h-screen bg-gray-100">
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
    </div>
  )
}
