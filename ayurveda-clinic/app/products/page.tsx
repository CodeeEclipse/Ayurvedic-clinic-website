import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Star, MessageCircle } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      name: "Triphala Powder",
      category: "Digestive Health",
      price: "$24.99",
      description: "Traditional Ayurvedic blend of three fruits for digestive wellness and detoxification.",
      benefits: ["Digestive support", "Natural detox", "Antioxidant rich"],
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      inStock: true,
    },
    {
      name: "Ashwagandha Capsules",
      category: "Stress Relief",
      price: "$32.99",
      description: "Premium quality Ashwagandha root extract to support stress management and vitality.",
      benefits: ["Stress relief", "Energy boost", "Immune support"],
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      inStock: true,
    },
    {
      name: "Brahmi Oil",
      category: "Hair & Scalp",
      price: "$18.99",
      description: "Pure Brahmi oil for scalp massage to promote hair growth and mental clarity.",
      benefits: ["Hair growth", "Scalp health", "Mental clarity"],
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      inStock: true,
    },
    {
      name: "Turmeric Golden Milk Mix",
      category: "Immunity",
      price: "$16.99",
      description: "Organic turmeric blend with warming spices for daily wellness and immunity.",
      benefits: ["Anti-inflammatory", "Immunity boost", "Antioxidants"],
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      inStock: true,
    },
    {
      name: "Neem Face Pack",
      category: "Skincare",
      price: "$14.99",
      description: "Natural neem powder face pack for clear, healthy skin and acne prevention.",
      benefits: ["Acne control", "Skin purification", "Natural glow"],
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      inStock: false,
    },
    {
      name: "Herbal Sleep Tea",
      category: "Sleep & Relaxation",
      price: "$22.99",
      description: "Calming herbal blend with chamomile, lavender, and Ayurvedic herbs for restful sleep.",
      benefits: ["Better sleep", "Relaxation", "Stress relief"],
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      inStock: true,
    },
    {
      name: "Sesame Massage Oil",
      category: "Body Care",
      price: "$28.99",
      description: "Traditional sesame oil infused with healing herbs for Abhyanga self-massage.",
      benefits: ["Skin nourishment", "Muscle relaxation", "Circulation"],
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      inStock: true,
    },
    {
      name: "Chyawanprash",
      category: "Immunity",
      price: "$34.99",
      description: "Traditional Ayurvedic jam packed with herbs and nutrients for overall wellness.",
      benefits: ["Immunity boost", "Energy", "Respiratory health"],
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      inStock: true,
    },
  ]

  const categories = [
    "All",
    "Digestive Health",
    "Stress Relief",
    "Hair & Scalp",
    "Immunity",
    "Skincare",
    "Sleep & Relaxation",
    "Body Care",
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
          <h1 className="text-5xl font-bold text-green-800 mb-6">Herbal Products</h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of authentic Ayurvedic herbs, oils, and wellness products. Each
            item is sourced from trusted suppliers and meets the highest quality standards.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0 ? "bg-green-600 hover:bg-green-700" : "border-green-600 text-green-600 hover:bg-green-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {!product.inStock && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-red-100 text-red-700">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-green-800 mb-1">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-green-600">({product.rating})</span>
                    </div>
                  </div>

                  <p className="text-green-700 text-sm mb-3 leading-relaxed">{product.description}</p>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {product.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="border-green-300 text-green-600 text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-800">{product.price}</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50"
                        disabled={!product.inStock}
                      >
                        <MessageCircle className="h-4 w-4 mr-1" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">How to Order</h2>
            <p className="text-green-700 text-lg">Simple steps to get your Ayurvedic products</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Choose Products</h3>
              <p className="text-green-700">
                Browse our collection and select the products that meet your wellness needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Contact via WhatsApp</h3>
              <p className="text-green-700">
                Click the WhatsApp button to send us your order details and delivery information.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Receive & Enjoy</h3>
              <p className="text-green-700">
                We'll confirm your order and deliver fresh, authentic products to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Quality You Can Trust</h2>
              <div className="space-y-4 text-green-700">
                <p className="leading-relaxed">
                  Our herbal products are carefully sourced from certified organic farms and traditional suppliers who
                  follow authentic Ayurvedic preparation methods.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Leaf className="h-4 w-4 mr-2 text-green-600" />
                    100% Natural and Organic
                  </li>
                  <li className="flex items-center">
                    <Leaf className="h-4 w-4 mr-2 text-green-600" />
                    Traditional Preparation Methods
                  </li>
                  <li className="flex items-center">
                    <Leaf className="h-4 w-4 mr-2 text-green-600" />
                    Third-Party Lab Tested
                  </li>
                  <li className="flex items-center">
                    <Leaf className="h-4 w-4 mr-2 text-green-600" />
                    Sustainable Sourcing
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ayurvedic herbs and products"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need Personalized Recommendations?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Our Ayurvedic experts can recommend the best products for your specific health needs and constitution.
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
              <h3 className="font-semibold mb-4">Product Categories</h3>
              <ul className="space-y-2 text-green-200">
                <li>Digestive Health</li>
                <li>Stress Relief</li>
                <li>Immunity Boosters</li>
                <li>Skincare</li>
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
