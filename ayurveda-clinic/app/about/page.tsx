import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Users, Award } from "lucide-react"

export default function AboutPage() {
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
              <Link
                href="/about"
                className="text-green-700 hover:text-green-600 font-medium border-b-2 border-green-600"
              >
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
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">About Our Clinic</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Dedicated to preserving and practicing the ancient science of Ayurveda in its purest form, we provide
            holistic healing solutions for modern wellness challenges.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Our Mission</h2>
              <p className="text-green-700 text-lg mb-6 leading-relaxed">
                To restore and maintain optimal health through authentic Ayurvedic practices, combining time-tested
                wisdom with compassionate care. We believe in treating the root cause of illness, not just the symptoms.
              </p>
              <p className="text-green-700 text-lg leading-relaxed">
                Our approach focuses on understanding each individual's unique constitution and creating personalized
                treatment plans that promote lasting wellness and vitality.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ayurvedic herbs and treatments"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Ayurvedic Philosophy</h2>
            <p className="text-green-700 text-lg max-w-3xl mx-auto">
              Rooted in 5,000 years of wisdom, our practice embraces the fundamental principles of Ayurveda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Holistic Healing</h3>
                <p className="text-green-700">
                  We treat the whole person - mind, body, and spirit - addressing the root causes of imbalance rather
                  than just symptoms.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Personalized Care</h3>
                <p className="text-green-700">
                  Every treatment plan is customized based on your unique constitution (Prakriti) and current state of
                  health (Vikriti).
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Natural Remedies</h3>
                <p className="text-green-700">
                  We use only natural herbs, oils, and therapies, working in harmony with your body's innate healing
                  abilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinic Environment */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Healing Environment</h2>
            <p className="text-green-700 text-lg max-w-3xl mx-auto">
              Step into a sanctuary designed to promote peace, healing, and rejuvenation
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-15%20at%2001.18.32_1d637af2.jpg-oA21ujUye9IXWYI2OFFQfJ7Ym5G8pF.jpeg"
                alt="Serene treatment room with natural elements"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Tranquil Treatment Spaces</h3>
              <p className="text-green-700 mb-4 leading-relaxed">
                Our treatment rooms are thoughtfully designed with natural elements, soothing colors, and calming
                ambiance to enhance your healing experience. Each space is infused with the essence of nature to promote
                deep relaxation and therapeutic benefits.
              </p>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center">
                  <Leaf className="h-4 w-4 mr-2 text-green-600" /> Natural lighting and ventilation
                </li>
                <li className="flex items-center">
                  <Leaf className="h-4 w-4 mr-2 text-green-600" /> Organic materials and furnishings
                </li>
                <li className="flex items-center">
                  <Leaf className="h-4 w-4 mr-2 text-green-600" /> Aromatherapy with pure essential oils
                </li>
                <li className="flex items-center">
                  <Leaf className="h-4 w-4 mr-2 text-green-600" /> Peaceful meditation areas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Expert Team</h2>
            <p className="text-green-700 text-lg max-w-3xl mx-auto">
              Led by experienced practitioners with deep knowledge of traditional Ayurvedic medicine
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-green-800">Certified Practitioners</h3>
                </div>
                <p className="text-green-700 leading-relaxed">
                  All our doctors are certified from renowned Ayurvedic institutions and have extensive experience in
                  traditional healing methods. They continue their education to stay current with both ancient wisdom
                  and modern applications.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-green-800">Compassionate Care</h3>
                </div>
                <p className="text-green-700 leading-relaxed">
                  Our team is dedicated to providing personalized attention and emotional support throughout your
                  healing journey. We believe that healing happens best in an environment of trust, understanding, and
                  genuine care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Begin Your Healing Journey?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Experience the transformative power of authentic Ayurvedic medicine with our expert practitioners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Link href="/appointment">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              <Link href="/doctors">Meet Our Doctors</Link>
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
                  <Link href="/" className="hover:text-white">
                    Home
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
