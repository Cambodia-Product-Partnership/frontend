'use client';
import React from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardDescription, CardFooter, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuoteIcon } from 'lucide-react';

const teamMembers = [
  {
    name: "Moni Rachana",
    role: "Team Lead",
    image: "/moni.png",
    description: "With over 20 years of experience in agriculture, Sokha founded CPP to empower local farmers."
  },
  {
    name: "Vorleak",
    role: "Something",
    image: "/leah.png",
    description: "Chanthy works directly with farmers to understand their needs and implement supportive programs."
  },
  {
    name: "Elston Tan",
    role: "Tech Lead",
    image: "/elston.jpg",
    description: "\
    Singaporean government AI Research Engineer / Entrepreneur that has raised over $60k USD in pre-seed funding for multiple different startups based in the US, Hong Kong and Singapore.\
    Responsible for maintenance, development and deployment of the CPP platform."
  },
  {
    name: "Bopha Roth",
    role: "Marketing Director",
    image: "/placeholder.svg?height=300&width=300",
    description: "Bopha oversees our marketing strategies to promote Cambodian produce in local and international markets."
  },
  {
    name: "Dara Sok",
    role: "Operations Manager",
    image: "/placeholder.svg?height=300&width=300",
    description: "Dara ensures smooth day-to-day operations and logistics for our farmer partnerships."
  }
]

const testimonials = [
  {
    name: "Samnang Chhum",
    role: "Organic Rice Farmer",
    image: "/placeholder.svg?height=100&width=100",
    quote: "The Cambodia Product Partnership has transformed my farming business. I've gained access to new markets and learned sustainable practices that have increased my yield significantly.",
    type: "Farmer"
  },
  {
    name: "Sophea Pich",
    role: "Market Manager, Phnom Penh Central Market",
    image: "/placeholder.svg?height=100&width=100",
    quote: "This platform has made it incredibly easy to source high-quality, local produce. Our customers love the freshness and variety of products we can now offer.",
    type: "Market"
  },
  {
    name: "Vannak Meas",
    role: "Fruit Orchard Owner",
    image: "/placeholder.svg?height=100&width=100",
    quote: "Thanks to CPP, I've been able to expand my customer base beyond my local area. The support and resources they provide have been invaluable to my business growth.",
    type: "Farmer"
  },
  {
    name: "Channary Sok",
    role: "Procurement Manager, Siem Reap Resorts",
    image: "/placeholder.svg?height=100&width=100",
    quote: "CPP has streamlined our procurement process. We can now easily connect with local farmers and ensure a steady supply of fresh, locally-sourced ingredients for our restaurants.",
    type: "Market"
  }
]

export default function Homepage() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 bg-green-700 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-2xl font-semibold">CPP</span>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>
        <nav className="mt-8">
          <Link href="/" className="block py-3 px-6 hover:bg-green-800 text-lg">
            Home
          </Link>
          <Link href="/products-market" className="block py-3 px-6 hover:bg-green-800 text-lg">
            Products & Market
          </Link>
          <Link href="/farmer-profiles" className="block py-3 px-6 hover:bg-green-800 text-lg">
            Farmer Profiles
          </Link>
          <Link href="/blog" className="block py-3 px-6 hover:bg-green-800 text-lg">
            Blog
          </Link>
          <Link href="/get-involved" className="block py-3 px-6 hover:bg-green-800 text-lg">
            Get Involved
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <div
          className="min-h-screen flex items-center justify-center p-4"
          style={{
            backgroundImage: `url('/vegeBackground.jpg')`,  // Change to your image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-6xl w-full bg-white bg-opacity-90 shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                  Cambodian<br />Produce<br />Partnership
                </h1>
                <p className="text-xl md:text-2xl text-green-600 uppercase tracking-wide">
                  Bringing local<br />harvest to new<br />markets
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/vegetable.png"
                  width={600}
                  height={600}
                  alt="Fresh Cambodian produce in a green mesh bag"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <main>
          {/* Hero Section */}
          <section className="bg-gray-50 text-black py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-5xl font-black mb-4">Empowering Cambodian Farmers</h2>
              <p className="text-2xl mb-8 leading-relaxed">
                Fostering sustainable partnerships between local farmers and global markets, empowering growth and innovation.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-green-700 text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition duration-300">
                  Join Us
                </button>
                <button className="bg-green-700 text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition duration-300">
                  Sponsor a Farmer
                </button>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl text-black font-semibold mb-4">Our Vision</h3>
                  <p className="text-lg text-gray-700">
                    Cambodia Product Partnership is a non-profit organization connecting Cambodian farmers with international markets through innovative strategies, promoting sustainable practices, and empowering local communities.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl text-black font-semibold mb-4">Meet Our Team</h3>
                  <p className="text-lg text-gray-700">
                    Our dedicated team, the "Farming Avengers," combines expertise in agriculture, market development, and community engagement, working tirelessly to make a lasting impact in rural Cambodia.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-black font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader className="flex flex-col items-center">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-4 text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-green-600 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-black font-bold text-center mb-12">What Our Partners Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="pt-6">
                    <QuoteIcon className="text-green-500 w-8 h-8 mb-4" />
                    <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                  </CardContent>
                  <CardFooter className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <span className={`ml-auto px-2 py-1 rounded-full text-xs font-semibold ${
                      testimonial.type === 'Farmer' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {testimonial.type}
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <div className="flex items-center mb-2">
                  <Mail size={20} className="mr-2" />
                  <a href="mailto:info@cambodiaproductpartnership.org" className="hover:text-green-400">
                    info@cambodiaproductpartnership.org
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-2" />
                  <span>+855 23 456 789</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-green-400 transition duration-300">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="hover:text-green-400 transition duration-300">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="hover:text-green-400 transition duration-300">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
                <button className="bg-green-600 text-white px-4 py-3 rounded-full font-bold hover:bg-green-700 transition duration-300 w-full mb-4">
                  Join Our Mission
                </button>
                <button className="bg-white text-green-600 px-4 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300 w-full">
                  Sponsor a Farmer
                </button>
              </div>
            </div>
            <div className="mt-12 text-center text-gray-500">
              <p>&copy; 2023 Cambodia Product Partnership. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
