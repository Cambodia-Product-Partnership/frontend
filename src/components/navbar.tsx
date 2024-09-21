import { MenuIcon, PlusIcon, TrashIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-primary text-primary-foreground p-1 flex justify-between items-center">
        <Sheet>
            <SheetTrigger asChild>
            <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
            </Button>
            </SheetTrigger>
            <SheetContent className="bg-white" side="left">
            <SheetHeader>
                <SheetTitle>Cambodia Product Partnership</SheetTitle>
                <SheetDescription>
                </SheetDescription>
            </SheetHeader>
            <div className="py-4">
                <Link href="/">
                <Button className="w-full mb-2">
                    Home  
                </Button>
                </Link>
                <Link href="/products-market">
                <Button className="w-full mb-2">
                    Products & Market
                </Button>
                </Link>
                <Link href="/farmer-profiles">
                <Button className="w-full mb-2">
                    Farmer Profiles
                </Button>
                </Link>
                <Link href="/blog">
                <Button className="w-full mb-2">
                    Blog
                </Button>
                </Link>
            </div>
            </SheetContent>
        </Sheet>

        <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Cambodia Product Partnership</span>
            <img src="/cpp-logo.png" alt="Logo" className="h-14 w-auto" />
        </div>
        </nav>
  )
}