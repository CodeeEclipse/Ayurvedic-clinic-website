import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Award, Calendar, Star, GraduationCap } from "lucide-react"

export default function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Priya Sharma",
      title: "Chief Ayurvedic Physician",
      experience: "15+ years",
      specialties: ["Panchakarma", "Chronic Disease Management", "Women's Health", "Digestive Disorders"],
      qualifications: [
        "BAMS - Bachelor of Ayurvedic Medicine",
        "MD Ayurveda - Panchakarma",
        "Certified Pulse Diagnosis",
      ],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Dr. Priya Sharma is our lead practitioner with over 15 years of experience in traditional Ayurvedic medicine. She specializes in Panchakarma therapies and has helped thousands of patients achieve optimal health through personalized treatment plans.",
      languages: ["English", "Hindi", "Sanskrit"],
    },
    {
      name: "Dr. Rajesh Kumar",
      title: "Specialist in Stress & Mental Health",
      experience: "12+ years",
      specialties: ["Stress Management", "Anxiety Treatment", "Meditation Therapy", "Neurological Disorders"],
      qualifications: [
        "BAMS - Bachelor of Ayurvedic Medicine",
        "MD Ayurveda - Manas Roga",
        "Certified Yoga Instructor",
      ],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Dr. Rajesh Kumar focuses on mental health and stress-related disorders using Ayurvedic principles. His holistic approach combines traditional therapies with modern understanding of psychological well-being.",
      languages: ["English", "Hindi", "Tamil"],
    },
    {
      name: "Dr. Meera Patel",
      title: "Women's Health Specialist",
      experience: "10+ years",
      specialties: ["Reproductive Health", "Hormonal Balance", "Pregnancy Care", "Menstrual Disorders"],
      qualifications: ["BAMS - Bachelor of Ayurvedic Medicine", "MD Ayurveda - Prasuti Tantra", "Certified Herbalist"],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Dr. Meera Patel specializes in women's health issues, providing comprehensive care for reproductive health, hormonal imbalances, and pregnancy-related concerns using gentle Ayurvedic approaches.",
      languages: ["English", "Hindi", "Gujarati"],
    },
    {
      name: "Dr. Arjun Nair",
      title: "Orthopedic & Pain Management Specialist",
      experience: "14+ years",
      specialties: ["Joint Pain", "Arthritis", "Sports Injuries", "Spine Disorders"],
      qualifications: [
        "BAMS - Bachelor of Ayurvedic Medicine",
        "MD Ayurveda - Shalya Tantra",
        "Certified Marma Therapist",
      ],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Dr. Arjun Nair specializes in treating musculoskeletal disorders and chronic pain conditions. His expertise in Marma therapy and specialized Ayurvedic treatments has helped many patients avoid surgical interventions.",
      languages: ["English", "Hindi", "Malayalam"],
    },
    {
      name: "Dr. Kavitha Reddy",
      title: "Pediatric Ayurveda Specialist",
      experience: "8+ years",
      specialties: ["Child Health", "Immunity Building", "Growth Disorders", "Respiratory Issues"],
      qualifications: [
        "BAMS - Bachelor of Ayurvedic Medicine",
        "MD Ayurveda - Kaumarbhritya",
        "Child Development Certified",
      ],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Dr. Kavitha Reddy focuses on pediatric care, helping children achieve optimal health through gentle Ayurvedic treatments. She specializes in building immunity and treating common childhood ailments naturally.",
      languages: ["English", "Hindi", "Telugu"],
    },
    {
      name: "Dr. Vikram Singh",
      title: "Dermatology & Cosmetology Expert",
      experience: "11+ years",
      specialties: ["Skin Disorders", "Hair Problems", "Anti-aging", "Cosmetic Treatments"],
      qualifications: [
        "BAMS - Bachelor of Ayurvedic Medicine",
        "MD Ayurveda - Twak Roga",
        "Certified Aesthetic Practitioner",
      ],
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Dr. Vikram Singh combines traditional Ayurvedic wisdom with modern dermatological knowledge to treat various skin and hair conditions. His natural approach to beauty and wellness has gained recognition among patients seeking holistic cosmetic solutions.",
      languages: ["English", "Hindi", "Punjabi"],
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
              <Link href="/treatments" className="text-green-700 hover:text-green-600 font-medium">
                Treatments
              </Link>
              <Link
                href="/doctors"
                className="text-green-700 hover:text-green-600 font-medium border-b-2 border-green-600"
              >
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
          <h1 className="text-5xl font-bold text-green-800 mb-6">Meet Our Expert Practitioners</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Our team of experienced Ayurvedic doctors combines traditional wisdom with modern expertise to provide you
            with the highest quality of care and personalized treatment.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-green-50">
                      <Image
                        src={doctor.image || "/placeholder.svg"}
                        alt={doctor.name}
                        width={300}
                        height={300}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-semibold text-green-800 mb-1">{doctor.name}</h3>
                        <p className="text-green-600 font-medium mb-2">{doctor.title}</p>
                        <div className="flex items-center text-green-700 mb-3">
                          <Award className="h-4 w-4 mr-2" />
                          <span className="text-sm">{doctor.experience} Experience</span>
                        </div>
                      </div>

                      <p className="text-green-700 mb-4 text-sm leading-relaxed">{doctor.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Specialties:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {doctor.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-green-100 text-green-700 text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                          <GraduationCap className="h-4 w-4 mr-1" />
                          Qualifications:
                        </h4>
                        <ul className="text-green-700 text-xs space-y-1">
                          {doctor.qualifications.map((qualification, idx) => (
                            <li key={idx}>• {qualification}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-green-800 mb-2">Languages:</h4>
                        <p className="text-green-700 text-sm">{doctor.languages.join(", ")}</p>
                      </div>

                      <Button asChild className="bg-green-600 hover:bg-green-700 w-full">
                        <Link href="/appointment">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Appointment
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Doctors */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Why Choose Our Practitioners?</h2>
            <p className="text-green-700 text-lg max-w-3xl mx-auto">
              Our doctors bring together the best of traditional Ayurvedic knowledge and modern healthcare practices
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 bg-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Certified Expertise</h3>
                <p className="text-green-700">
                  All our doctors are certified from renowned Ayurvedic institutions with advanced degrees and
                  specialized training.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Proven Experience</h3>
                <p className="text-green-700">
                  Years of practical experience treating diverse health conditions with successful outcomes and patient
                  satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Personalized Care</h3>
                <p className="text-green-700">
                  Each doctor provides individualized attention, creating customized treatment plans based on your
                  unique constitution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Meet Your Ayurvedic Doctor?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with one of our expert practitioners to begin your personalized healing journey.
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
              <Link href="/treatments">View Treatments</Link>
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
                  <Link href="/treatments" className="hover:text-white">
                    Treatments
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
              <h3 className="font-semibold mb-4">Specialties</h3>
              <ul className="space-y-2 text-green-200">
                <li>Panchakarma</li>
                <li>Stress Management</li>
                <li>Women's Health</li>
                <li>Pain Management</li>
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
