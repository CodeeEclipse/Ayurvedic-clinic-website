"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Leaf, Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react"

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatmentType: "",
    preferredDate: "",
    preferredTime: "",
    healthConcern: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
        <Card className="max-w-md w-full border-green-200">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Appointment Request Received!</h2>
            <p className="text-green-700 mb-6">
              Thank you for your appointment request. Our team will contact you within 24 hours to confirm your
              appointment details.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                <Link href="/treatments">View Treatments</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">Ayurveda Clinic</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-green-700 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-green-700 hover:text-green-600 font-medium">
                About
              </Link>
              <Link href="/treatments" className="text-green-700 hover:text-green-600 font-medium">
                Treatments
              </Link>
              <Link href="/doctors" className="text-green-700 hover:text-green-600 font-medium">
                Doctors
              </Link>
              <Link href="/contact" className="text-green-700 hover:text-green-600 font-medium">
                Contact
              </Link>
            </div>
            <Button asChild variant="outline" className="border-green-600 text-green-600">
              <Link href="/">Back to Home</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Book Your Appointment</h1>
            <p className="text-green-700 text-lg max-w-2xl mx-auto">
              Take the first step towards natural healing. Fill out the form below and our team will contact you to
              confirm your appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Appointment Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-green-800">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-green-200 focus:border-green-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-green-800">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-green-200 focus:border-green-500"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-green-800">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-green-200 focus:border-green-500"
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Treatment Selection */}
                    <div>
                      <Label htmlFor="treatmentType" className="text-green-800">
                        Treatment Type *
                      </Label>
                      <Select onValueChange={(value) => handleSelectChange("treatmentType", value)} required>
                        <SelectTrigger className="border-green-200 focus:border-green-500">
                          <SelectValue placeholder="Select a treatment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">Initial Consultation</SelectItem>
                          <SelectItem value="panchakarma">Panchakarma</SelectItem>
                          <SelectItem value="shirodhara">Shirodhara</SelectItem>
                          <SelectItem value="abhyanga">Abhyanga</SelectItem>
                          <SelectItem value="nasya">Nasya</SelectItem>
                          <SelectItem value="udvartana">Udvartana</SelectItem>
                          <SelectItem value="kizhi">Kizhi</SelectItem>
                          <SelectItem value="other">Other (specify in message)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate" className="text-green-800">
                          Preferred Date *
                        </Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          required
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="border-green-200 focus:border-green-500"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime" className="text-green-800">
                          Preferred Time *
                        </Label>
                        <Select onValueChange={(value) => handleSelectChange("preferredTime", value)} required>
                          <SelectTrigger className="border-green-200 focus:border-green-500">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9:00">9:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="15:00">3:00 PM</SelectItem>
                            <SelectItem value="16:00">4:00 PM</SelectItem>
                            <SelectItem value="17:00">5:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Health Concern */}
                    <div>
                      <Label htmlFor="healthConcern" className="text-green-800">
                        Primary Health Concern
                      </Label>
                      <Input
                        id="healthConcern"
                        name="healthConcern"
                        type="text"
                        value={formData.healthConcern}
                        onChange={handleInputChange}
                        className="border-green-200 focus:border-green-500"
                        placeholder="e.g., Stress, Digestive issues, Joint pain"
                      />
                    </div>

                    {/* Additional Message */}
                    <div>
                      <Label htmlFor="message" className="text-green-800">
                        Additional Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-green-200 focus:border-green-500"
                        placeholder="Any additional information you'd like to share..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-green-700">
                    <Phone className="h-4 w-4 mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <Mail className="h-4 w-4 mr-3" />
                    <span>info@ayurvedaclinic.com</span>
                  </div>
                  <div className="flex items-start text-green-700">
                    <User className="h-4 w-4 mr-3 mt-1" />
                    <div>
                      <p>123 Wellness Street</p>
                      <p>Harmony City, HC 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Clinic Hours */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Clinic Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-green-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-green-700 text-sm">
                  <p>• Initial consultation lasts 60-90 minutes</p>
                  <p>• Detailed health history and pulse diagnosis</p>
                  <p>• Personalized treatment plan discussion</p>
                  <p>• Dietary and lifestyle recommendations</p>
                  <p>• Follow-up appointments as needed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-bold">Ayurveda Clinic</span>
              </div>
              <p className="text-green-200">Authentic Ayurvedic healing for mind, body, and spirit.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-green-200">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/treatments" className="hover:text-white">
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/doctors" className="hover:text-white">
                    Doctors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Treatments</h3>
              <ul className="space-y-2 text-green-200">
                <li>Panchakarma</li>
                <li>Shirodhara</li>
                <li>Abhyanga</li>
                <li>Herbal Medicine</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-green-200">
                <p>+1 (555) 123-4567</p>
                <p>123 Wellness Street</p>
                <p>Harmony City, HC 12345</p>
                <p>info@ayurvedaclinic.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 Ayurveda Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
