'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { auth, db } from '../../lib/firebase'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

const mangoTypes = [
  "Carabao", "Nam Dok Mai", 
  "Alphonso", "Ataulfo", 
  "Kent", "Keitt", 
  "Tommy Atkins", "Haden",
]

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [mangoType, setMangoType] = useState('')
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      
      const userData = {
        email,
        name,
        location,
        contactNumber,
        userType,
        mangoType: ''
      }

      if (userType === 'farmer') {
        userData['mangoType'] = mangoType
      }

      await setDoc(doc(db, userType === 'farmer' ? 'farmers' : 'markets', user.uid), userData)
      
      router.push('/login')
    } catch (error) {
      console.error('Error registering user:', error)
    }
  }

  return (
    <div>
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="userType">User Type</Label>
              <Select onValueChange={setUserType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="market">Market</SelectItem>
                  <SelectItem value="farmer">Farmer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {userType && (
              <>
                <div>
                  <Label htmlFor="name">{userType === 'farmer' ? 'Farm Name' : 'Market Name'}</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="location">{userType === 'farmer' ? 'Farm Location' : 'Market Location'}</Label>
                  <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="contactNumber">Contact Number</Label>
                  <Input id="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
                </div>
                {userType === 'farmer' && (
                  <div>
                    <Label htmlFor="mangoType">Mango Type</Label>
                    <Select onValueChange={setMangoType} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mango type" />
                      </SelectTrigger>
                      <SelectContent>
                        {mangoTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </>
            )}
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full">
            Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
    </div>
  )
}