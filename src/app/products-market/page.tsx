'use client'
import React from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Tommy Atkins Mangoes',
    description: 'Tommy Atkins mangoes from the Amarak farm.',
    price: '$2.99/lb',
    availability: 'In Stock',
    image: '/tommy_atkins.jpg',
  },
  {
    id: 2,
    name: 'Haden Mangoes',
    description: 'Fiborous mango with good flavour from the nearby farm of Amarak.',
    price: '$1.99/lb',
    availability: 'Limited Stock',
    image: '/hadenmango.png',
  },
  {
    id: 3,
    name: 'Nam Dok Mai Mangoes',
    description: 'Nam Dok Mai mangoes grown from Nam Dok Mai seeds imported from Thailand',
    price: '$1.50/lb',
    availability: 'In Stock',
    image: '/namdokmai.png',
  },
  {
    id: 4,
    name: 'Alphonso Mangoes',
    description: 'Alphonso mangoes that came from India and are grown locally.',
    price: '$3.99/lb',
    availability: 'In Stock',
    image: '/alphonso.jpeg',
  },
  {
    id: 5,
    name: 'Carabao Mangoes',
    description: 'Carabao Mangoes from the Phillipines, provides a particularly sweet flavour.',
    price: '$1.25/lb',
    availability: 'In Stock',
    image: '/carabao.jpg',
  },
  {
    id: 6,
    name: 'Kent Mango',
    description: 'Originated from a seed of the Haden mango variety.',
    price: '$2.50/lb',
    availability: 'Limited Stock',
    image: '/kent.jpeg',
  },
]

export default function ProductsMarket() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div>
    <div className="flex min-h-screen bg-gray-100">
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
    </div>
  )
}