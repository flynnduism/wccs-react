import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Admissions</h1>
          <p className="text-xl text-teal-700 leading-relaxed max-w-3xl mx-auto">
            We welcome families who are drawn to our educational approach and community values. Learn about our
            admissions process and how to join our school community.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Application Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-teal-200">
              <CardHeader>
                <CardTitle className="text-xl text-primary">1. Visit & Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-600 mb-4">
                  Schedule a tour, attend an open house, or join us for a community event to experience our school
                  firsthand.
                </p>
                <Link href="/visit">
                  <Button variant="outline" className="border-primary text-primary bg-transparent">
                    Schedule Visit
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200">
              <CardHeader>
                <CardTitle className="text-xl text-primary">2. Submit Application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-600 mb-4">
                  Complete our application form and submit required documents. We use a self-determined fee system.
                </p>
                <Link href="/application-form">
                  <Button variant="outline" className="border-primary text-primary bg-transparent">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200">
              <CardHeader>
                <CardTitle className="text-xl text-primary">3. Family Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-600 mb-4">
                  Meet with our admissions team to discuss your family's needs and how we can support your child's
                  growth.
                </p>
                <Button variant="outline" className="border-primary text-primary bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-8 text-center">Tuition & Financial Support</h2>

          <Card className="border-teal-200 shadow-lg mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif text-primary mb-4">Self-Determined Fee System</h3>
              <p className="text-teal-700 leading-relaxed mb-6">
                We believe that financial circumstances should not be a barrier to accessing quality Waldorf education.
                Our self-determined fee system allows families to contribute what they can afford while ensuring the
                sustainability of our school.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">How It Works:</h4>
                  <ul className="text-teal-600 space-y-1">
                    <li>• Review our fee guidelines</li>
                    <li>• Assess your family's financial capacity</li>
                    <li>• Submit your self-determined fee proposal</li>
                    <li>• Work with our team to finalize arrangements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Additional Support:</h4>
                  <ul className="text-teal-600 space-y-1">
                    <li>• Payment plans available</li>
                    <li>• Work-study opportunities</li>
                    <li>• Scholarship funds</li>
                    <li>• Community fundraising support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">Ready to Begin?</h2>
          <p className="text-xl text-teal-700 mb-8">Take the first step toward joining our school community.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inquiry-form">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Submit Inquiry
              </Button>
            </Link>
            <Link href="/visit">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-teal-50 bg-transparent"
              >
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
