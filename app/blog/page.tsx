import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 text-balance">School Blog</h1>
          <p className="text-xl text-teal-700 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Stories from our classrooms, insights into Waldorf education, and celebrations of our 
            school community's journey and growth.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Recent Posts</h2>
          <div className="grid gap-8">
            
            {/* Sample Blog Post 1 */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl text-primary">Celebrating Michaelmas: A Festival of Courage and Community</CardTitle>
                  <span className="text-sm text-teal-600">October 2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 leading-relaxed mb-4">
                  Last week, our school community gathered to celebrate Michaelmas, the festival of courage and 
                  protection that marks the transition from summer to autumn. Students from all grades participated 
                  in traditional activities including dragon bread baking, harvest sharing, and storytelling about 
                  Saint Michael's courage...
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" className="border-primary text-primary hover:bg-teal-50">
                    Read More
                  </Button>
                  <span className="text-sm text-teal-600">By Sarah Martinez, Early Childhood Teacher</span>
                </div>
              </CardContent>
            </Card>

            {/* Sample Blog Post 2 */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl text-primary">Form Drawing: The Foundation of Learning</CardTitle>
                  <span className="text-sm text-teal-600">September 2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 leading-relaxed mb-4">
                  In our lower school classrooms, you'll often see students engaged in form drawing - creating 
                  flowing, rhythmic patterns with careful attention to form and beauty. This foundational practice 
                  in Waldorf education develops far more than artistic skills; it prepares students for writing, 
                  mathematics, and develops concentration and spatial awareness...
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" className="border-primary text-primary hover:bg-teal-50">
                    Read More
                  </Button>
                  <span className="text-sm text-teal-600">By David Chen, Grade 2 Teacher</span>
                </div>
              </CardContent>
            </Card>

            {/* Sample Blog Post 3 */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl text-primary">Our Garden Program: Growing More Than Plants</CardTitle>
                  <span className="text-sm text-teal-600">August 2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 leading-relaxed mb-4">
                  This summer, our school garden has flourished thanks to the dedication of students, families, 
                  and volunteers. From the first seeds planted in spring to the abundant harvest we're now 
                  enjoying, the garden has provided countless learning opportunities that extend far beyond 
                  botany lessons...
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" className="border-primary text-primary hover:bg-teal-50">
                    Read More
                  </Button>
                  <span className="text-sm text-teal-600">By Maria Rodriguez, Garden Coordinator</span>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary mb-12 text-center">Explore by Topic</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Card className="border-teal-200 hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">Classroom Life</h3>
                <p className="text-sm text-teal-600 mb-3">Stories from our daily learning experiences</p>
                <span className="text-xs text-teal-500">12 posts</span>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">Seasonal Festivals</h3>
                <p className="text-sm text-teal-600 mb-3">Celebrating the rhythm of the year</p>
                <span className="text-xs text-teal-500">8 posts</span>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">Waldorf Education</h3>
                <p className="text-sm text-teal-600 mb-3">Insights into our educational philosophy</p>
                <span className="text-xs text-teal-500">15 posts</span>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">Community Events</h3>
                <p className="text-sm text-teal-600 mb-3">Highlights from school gatherings</p>
                <span className="text-xs text-teal-500">6 posts</span>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">Stay Connected</h2>
          <p className="text-lg text-teal-700 mb-8 text-pretty">
            Subscribe to our newsletter to receive the latest blog posts, school updates, and community news 
            directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Archives */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-8">Blog Archives</h2>
          <p className="text-lg text-teal-700 mb-8">
            Explore our collection of stories and insights from previous years.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Button variant="outline" className="border-primary text-primary hover:bg-teal-50">
              2024 Posts
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-teal-50">
              2023 Posts
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-teal-50">
              2022 Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">Experience Our Community</h2>
          <p className="text-lg text-teal-700 mb-8 text-pretty">
            Interested in learning more about what makes our school special? Visit us to experience 
            our vibrant learning community firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              <Link href="/visit">Schedule a Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-teal-50 px-8 py-3 bg-transparent"
            >
              <Link href="/inquiry-form">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}