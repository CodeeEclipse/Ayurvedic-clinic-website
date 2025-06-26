"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Leaf, MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
        <Card className="max-w-md w-full border-green-200">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Message Sent Successfully!</h2>
            <p className="text-green-700 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                <Link href="/appointment">Book Appointment</Link>
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
              <Link
                href="/contact"
                className="text-green-700 hover:text-green-600 font-medium border-b-2 border-green-600"
              >
                Contact
              </Link>
            </div>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/appointment">Book Consultation</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">Contact Us</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            We're here to help you on your journey to wellness. Get in touch with our team for any questions,
            appointment requests, or information about our Ayurvedic treatments.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-green-200 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Phone</h3>
                <p className="text-green-700 mb-2">+1 (555) 123-4567</p>
                <p className="text-green-600 text-sm">Mon-Fri: 9AM-6PM</p>
                <p className="text-green-600 text-sm">Sat: 9AM-4PM</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Email</h3>
                <p className="text-green-700 mb-2">info@ayurvedaclinic.com</p>
                <p className="text-green-600 text-sm">We respond within 24 hours</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Location</h3>
                <p className="text-green-700 mb-2">123 Wellness Street</p>
                <p className="text-green-700">Harmony City, HC 12345</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <Send className="h-5 w-5 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-green-200 focus:border-green-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-green-800">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-green-200 focus:border-green-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-green-800">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-green-200 focus:border-green-500"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-green-800">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-green-200 focus:border-green-500"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Google Maps Embed */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-green-100 rounded-b-lg flex items-center justify-center">
                    <div className="text-center text-green-700">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-medium">Interactive Map</p>
                      <p className="text-sm">123 Wellness Street, Harmony City</p>
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
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-green-100">
                    <span className="text-green-700 font-medium">Monday - Friday</span>
                    <span className="text-green-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-100">
                    <span className="text-green-700 font-medium">Saturday</span>
                    <span className="text-green-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-green-700 font-medium">Sunday</span>
                    <span className="text-green-600">Closed</span>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Emergency Contact</h3>
                  <p className="text-green-700 mb-2">
                    For urgent health concerns outside clinic hours, please contact:
                  </p>
                  <p className="text-green-600 font-medium">Emergency Line: +1 (555) 999-0000</p>
                  <p className="text-green-600 text-sm mt-2">
                    *For life-threatening emergencies, please call 911 immediately
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-green-700 text-lg">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-green-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Do I need an appointment?</h3>
                <p className="text-green-700">
                  Yes, we operate by appointment only to ensure each patient receives dedicated time and attention. You
                  can book online or call us directly.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">What should I bring to my first visit?</h3>
                <p className="text-green-700">
                  Please bring any recent medical reports, a list of current medications, and comfortable clothing.
                  Arrive 15 minutes early to complete intake forms.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Do you accept insurance?</h3>
                <p className="text-green-700">
                  We accept most major insurance plans. Please contact us with your insurance information to verify
                  coverage before your appointment.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">How long is a typical consultation?</h3>
                <p className="text-green-700">
                  Initial consultations typically last 60-90 minutes, while follow-up appointments are usually 30-45
                  minutes. Treatment sessions vary depending on the therapy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4">
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
