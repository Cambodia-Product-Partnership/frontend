'use client'
import React from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    description: 'Juicy, ripe tomatoes perfect for salads or cooking.',
    price: '$2.99/lb',
    availability: 'In Stock',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 2,
    name: 'Organic Carrots',
    description: 'Sweet and crunchy carrots, locally grown.',
    price: '$1.99/lb',
    availability: 'Limited Stock',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 3,
    name: 'Green Lettuce',
    description: 'Crisp and fresh lettuce for your healthy meals.',
    price: '$1.50/head',
    availability: 'In Stock',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 4,
    name: 'Bell Peppers',
    description: 'Colorful bell peppers, great for stir-fries.',
    price: '$3.99/lb',
    availability: 'In Stock',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 5,
    name: 'Fresh Cucumbers',
    description: 'Cool and refreshing cucumbers for salads.',
    price: '$1.25/each',
    availability: 'In Stock',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 6,
    name: 'Organic Spinach',
    description: 'Nutrient-rich spinach leaves, perfect for smoothies.',
    price: '$2.50/bunch',
    availability: 'Limited Stock',
    image: '/placeholder.svg?height=200&width=200',
  },
]

export default function ProductsMarket() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

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
          <Link href="/products-market" className="block py-3 px-6 bg-green-800 text-lg font-semibold">
            Products & Market
          </Link>
          <Link href="/farmer-profiles" className="block py-3 px-6 hover:bg-green-800 text-lg transition duration-300">
            Farmer Profiles
          </Link>
          <Link href="/blog" className="block py-3 px-6 hover:bg-green-800 text-lg transition duration-300">
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
            <h1 className="text-2xl font-bold text-gray-900">Products & Market</h1>
            <div className="flex items-center">
              <button className="mr-4 text-gray-600 hover:text-gray-900 transition duration-300">
                <ShoppingCart size={24} />
              </button>
              <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-600 hover:text-gray-900 transition duration-300">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Fresh Produce</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-green-600">{product.price}</span>
                      <span className={`px-2 py-1 rounded-full text-sm font-semibold ${
                        product.availability === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {product.availability}
                      </span>
                    </div>
                  </div>
                </div>
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