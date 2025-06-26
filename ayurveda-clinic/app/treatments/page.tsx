import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Clock, Star, Droplets, Flower, Heart } from "lucide-react"

export default function TreatmentsPage() {
  const treatments = [
    {
      name: "Panchakarma",
      description:
        "Complete detoxification and rejuvenation therapy that eliminates toxins from the body and restores natural balance.",
      benefits: ["Deep detoxification", "Improved immunity", "Enhanced vitality", "Stress relief"],
      duration: "7-21 days",
      icon: <Leaf className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Shirodhara",
      description:
        "Continuous stream of warm medicated oil poured over the forehead to calm the mind and nervous system.",
      benefits: ["Reduces anxiety", "Improves sleep", "Mental clarity", "Headache relief"],
      duration: "45-60 minutes",
      icon: <Droplets className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Abhyanga",
      description:
        "Full-body oil massage using warm herbal oils to improve circulation, flexibility, and overall well-being.",
      benefits: ["Better circulation", "Muscle relaxation", "Skin nourishment", "Joint mobility"],
      duration: "60-90 minutes",
      icon: <Heart className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Nasya",
      description:
        "Nasal administration of medicated oils or powders to treat respiratory and neurological conditions.",
      benefits: ["Sinus relief", "Improved breathing", "Mental clarity", "Headache relief"],
      duration: "30-45 minutes",
      icon: <Flower className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Udvartana",
      description: "Herbal powder massage that helps reduce weight, improve skin texture, and enhance circulation.",
      benefits: ["Weight management", "Skin improvement", "Cellulite reduction", "Lymphatic drainage"],
      duration: "45-60 minutes",
      icon: <Star className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Kizhi",
      description:
        "Therapeutic massage using heated herbal pouches to relieve pain and inflammation in joints and muscles.",
      benefits: ["Pain relief", "Reduced inflammation", "Improved mobility", "Muscle relaxation"],
      duration: "60-75 minutes",
      icon: <Leaf className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

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
              <Link
                href="/treatments"
                className="text-green-700 hover:text-green-600 font-medium border-b-2 border-green-600"
              >
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
          <h1 className="text-5xl font-bold text-green-800 mb-6">Ayurvedic Treatments</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of authentic Ayurvedic therapies designed to restore balance, promote
            healing, and enhance your overall well-being.
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.name}
                      width={400}
                      height={300}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <div className="text-green-600">{treatment.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-green-800">{treatment.name}</h3>
                        <div className="flex items-center text-green-600 mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{treatment.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-700 mb-4 leading-relaxed">{treatment.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-800 mb-2">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {treatment.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-green-100 text-green-700">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/appointment">Book This Treatment</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Treatment Process</h2>
            <p className="text-green-700 text-lg max-w-3xl mx-auto">
              Every treatment begins with a thorough consultation to understand your unique needs
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Consultation</h3>
              <p className="text-green-700">Detailed assessment of your health, lifestyle, and constitution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Diagnosis</h3>
              <p className="text-green-700">Identification of imbalances using traditional Ayurvedic methods</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Treatment Plan</h3>
              <p className="text-green-700">Customized therapy program tailored to your specific needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Follow-up</h3>
              <p className="text-green-700">Ongoing support and adjustments to ensure optimal results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience Authentic Ayurveda?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Book a consultation with our expert practitioners to discover which treatments are right for you.
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
                  <Link href="/about" className="hover:text-white">
                    About Us
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
              <h3 className="font-semibold mb-4">Popular Treatments</h3>
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
