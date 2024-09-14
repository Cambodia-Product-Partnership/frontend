'use client'
import React from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const farmers = [
  {
    id: 1,
    name: "Sophea Chhun",
    image: "/placeholder.svg?height=400&width=400",
    location: "Battambang Province",
    specialty: "Organic Rice",
    journey: "Sophea started farming at a young age, learning traditional methods from her parents. She joined CPP to modernize her techniques and expand her market reach.",
    challenges: "Faced water scarcity and unpredictable weather patterns, threatening crop yields.",
    impact: "Through CPP's irrigation support and climate-resilient farming techniques, Sophea increased her yield by 40%.",
    success: "Now a leader in her community, Sophea mentors other farmers in sustainable agriculture practices."
  },
  {
    id: 2,
    name: "Rithy Seng",
    image: "/placeholder.svg?height=400&width=400",
    location: "Siem Reap Province",
    specialty: "Tropical Fruits",
    journey: "A second-generation farmer, Rithy dreamed of expanding beyond local markets. CPP provided the network and knowledge to make it happen.",
    challenges: "Struggled with post-harvest losses and limited access to cold storage facilities.",
    impact: "CPP's cold chain solutions reduced Rithy's post-harvest losses by 60%, significantly increasing his income.",
    success: "Rithy's mangoes are now exported to Singapore and Hong Kong, fetching premium prices."
  },
  {
    id: 3,
    name: "Bopha Keo",
    image: "/placeholder.svg?height=400&width=400",
    location: "Kampot Province",
    specialty: "Pepper and Spices",
    journey: "Bopha inherited a small pepper farm and wanted to preserve Kampot's pepper legacy while making it economically viable.",
    challenges: "Faced competition from cheaper, lower-quality imports and lacked marketing skills.",
    impact: "CPP's branding and marketing support helped Bopha position her pepper as a premium product.",
    success: "Bopha's pepper is now used by top chefs in Cambodia and abroad, and she's expanded into other spices."
  }
]

export default function FarmerProfiles() {
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
          <Link href="/products-market" className="block py-3 px-6 hover:bg-green-800 text-lg transition duration-300">
            Products & Market
          </Link>
          <Link href="/farmer-profiles" className="block py-3 px-6 bg-green-800 text-lg font-semibold">
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
            <h1 className="text-2xl font-bold text-gray-900">Farmer Profiles</h1>
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-600 hover:text-gray-900 transition duration-300">
              <Menu size={24} />
            </button>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {farmers.map((farmer) => (
                <Card key={farmer.id} className="flex flex-col">
                  <CardHeader>
                    <Image
                      src={farmer.image}
                      alt={farmer.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <CardTitle className="mt-4">{farmer.name}</CardTitle>
                    <CardDescription>{farmer.location} - {farmer.specialty}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h3 className="font-semibold mb-2">Journey</h3>
                    <p className="text-sm text-gray-600 mb-4">{farmer.journey}</p>
                    <h3 className="font-semibold mb-2">Challenges</h3>
                    <p className="text-sm text-gray-600 mb-4">{farmer.challenges}</p>
                    <h3 className="font-semibold mb-2">Impact of Partnership</h3>
                    <p className="text-sm text-gray-600 mb-4">{farmer.impact}</p>
                    <h3 className="font-semibold mb-2">Success Story</h3>
                    <p className="text-sm text-gray-600">{farmer.success}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Read Full Story
                      <ChevronRight className="ml-2 h-4 w-4" />
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