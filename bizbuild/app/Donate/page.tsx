"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function page() {
  const [amount, setAmount] = useState('')
  const [donationType, setDonationType] = useState('one-time')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the donation submission
    console.log('Donation submitted:', { amount, donationType })
    // You could add API calls or other logic here
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
          <CardHeader className="bg-[#082E22] text-white p-6">
            <CardTitle className="text-3xl font-bold">Donate to BizBuild</CardTitle>
            <CardDescription className="text-[#00CC99]">
              Your contribution helps us empower the next generation of entrepreneurs
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="amount" className="block text-sm font-medium text-[#082E22]">
                  Donation Amount ($)
                </Label>
                <Input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="mt-1 block w-full border-[#00CC99] focus:border-[#00CC99] focus:ring focus:ring-[#00CC99] focus:ring-opacity-50"
                  required
                />
              </div>
              <RadioGroup value={donationType} onValueChange={setDonationType} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-time" id="one-time" />
                  <Label htmlFor="one-time">One-time donation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly donation</Label>
                </div>
              </RadioGroup>
              <Button type="submit" className="w-full bg-[#00CC99] hover:bg-[#00AA77] text-white font-bold py-2 px-4 rounded">
                Donate Now
              </Button>
            </form>
          </CardContent>
          <CardFooter className="bg-gray-50 px-6 py-4">
            <p className="text-sm text-gray-600">
              Your donation is tax-deductible. BizBuild is a registered 501(c)(3) non-profit organization.
            </p>
          </CardFooter>
        </Card>
      </motion.div>
      <div className="mt-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Why Donate to BizBuild?</h2>
        <p className="max-w-2xl mx-auto">
          Your generous donation helps us provide essential resources, mentorship, and opportunities to young entrepreneurs. 
          Together, we can build a brighter future by empowering the next generation of business leaders.
        </p>
      </div>
    </div>
  )
}