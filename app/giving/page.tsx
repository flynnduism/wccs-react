import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function GivingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-balance">Support Our School</h1>
          <p className="text-xl text-teal-700 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Your generosity helps us provide exceptional Waldorf education and maintain our beautiful campus 
            for current and future generations of students.
          </p>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Ways to Support WCCS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Annual Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  Your annual fund contribution directly supports our educational programs, faculty development, 
                  and student experiences that make our school exceptional.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Make a Donation
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Capital Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  Support major improvements to our facilities, technology, and campus infrastructure 
                  that benefit our entire school community.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-teal-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Volunteer Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  Contribute your time and skills through committee work, event planning, campus maintenance, 
                  or classroom support opportunities.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-teal-50">
                  Get Involved
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Planned Giving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  Create a lasting legacy through estate planning, memorial gifts, or endowment contributions 
                  that will support the school for years to come.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-teal-50">
                  Contact Us
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-8">Your Impact</h2>
          <p className="text-lg text-teal-700 mb-12 text-pretty">
            Every gift, no matter the size, makes a meaningful difference in the lives of our students and families.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">$50</h3>
              <p className="text-teal-600">Supports art supplies for one student for a month</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">$150</h3>
              <p className="text-teal-600">Provides books for a classroom library</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">$500</h3>
              <p className="text-teal-600">Funds a field trip for an entire class</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-teal-700 mb-8 text-pretty">
            Join our community of supporters who believe in the transformative power of Waldorf education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              <Link href="/contact">Contact Development</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-teal-50 px-8 py-3 bg-transparent"
            >
              <Link href="/community">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}