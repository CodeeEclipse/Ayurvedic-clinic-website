import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Star, Phone } from "lucide-react"

export default function HomePage() {
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
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/appointment">Book Consultation</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Restore Balance Through Ancient Wisdom
            </h1>
            <p className="text-xl text-green-700 mb-8 leading-relaxed">
              Experience authentic Ayurvedic healing in a serene environment. Our expert practitioners combine
              traditional knowledge with modern care to restore your natural balance and vitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                <Link href="/appointment">Book Your Healing Session</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-3"
              >
                <Link href="/treatments">Explore Treatments</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Room Image */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-15%20at%2001.18.32_1d637af2.jpg-oA21ujUye9IXWYI2OFFQfJ7Ym5G8pF.jpeg"
              alt="Serene Ayurveda treatment room with calming green ambiance"
              width={800}
              height={600}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Healing Treatments</h2>
            <p className="text-green-700 text-lg max-w-2xl mx-auto">
              Discover time-tested Ayurvedic therapies designed to cleanse, rejuvenate, and restore your body's natural
              harmony.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Panchakarma</h3>
                <p className="text-green-700">
                  Complete detoxification and rejuvenation therapy to eliminate toxins and restore balance.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Shirodhara</h3>
                <p className="text-green-700">
                  Continuous stream of warm oil poured over the forehead to calm the mind and nervous system.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Abhyanga</h3>
                <p className="text-green-700">
                  Full-body oil massage using warm herbal oils to improve circulation and flexibility.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="/treatments">View All Treatments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Meet Our Expert Practitioners</h2>
            <p className="text-green-700 text-lg max-w-2xl mx-auto">
              Our experienced Ayurvedic doctors combine traditional wisdom with compassionate care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Dr. Priya Sharma"
                  width={150}
                  height={150}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Dr. Priya Sharma</h3>
                <p className="text-green-600 mb-3">Chief Ayurvedic Physician</p>
                <p className="text-green-700 text-sm mb-4">
                  15+ years experience in Panchakarma and chronic disease management.
                </p>
                <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                  <Link href="/doctors">View Profile</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Dr. Rajesh Kumar"
                  width={150}
                  height={150}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-green-600 mb-3">Specialist in Stress & Anxiety</p>
                <p className="text-green-700 text-sm mb-4">Expert in mind-body therapies and meditation techniques.</p>
                <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                  <Link href="/doctors">View Profile</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Dr. Meera Patel"
                  width={150}
                  height={150}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Dr. Meera Patel</h3>
                <p className="text-green-600 mb-3">Women's Health Specialist</p>
                <p className="text-green-700 text-sm mb-4">Specialized in reproductive health and hormonal balance.</p>
                <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                  <Link href="/doctors">View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">What Our Patients Say</h2>
            <p className="text-green-700 text-lg">Real stories of healing and transformation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-green-700 mb-4">
                  "The Panchakarma treatment completely transformed my health. I feel more energetic and balanced than I
                  have in years."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Johnson"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-green-800">Sarah Johnson</p>
                    <p className="text-green-600 text-sm">Marketing Executive</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-green-700 mb-4">
                  "Dr. Sharma's expertise in treating my chronic digestive issues has been life-changing. Highly
                  recommended!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Michael Chen"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-green-800">Michael Chen</p>
                    <p className="text-green-600 text-sm">Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-green-700 mb-4">
                  "The serene environment and personalized care made my healing journey truly special. Thank you!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Emma Davis"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-green-800">Emma Davis</p>
                    <p className="text-green-600 text-sm">Yoga Instructor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Begin Your Journey to Wellness</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards natural healing and balanced living. Our expert practitioners are here to guide
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Link href="/appointment">Book Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
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
                <li>
                  <Link href="/appointment" className="hover:text-white">
                    Book Appointment
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
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" /> +1 (555) 123-4567
                </p>
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
