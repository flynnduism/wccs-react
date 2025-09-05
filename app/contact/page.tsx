import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-50 to-stone-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Contact Us</h1>
            <p className="text-xl text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              We understand the importance of finding the best school for your child.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold text-amber-900 mb-6">Wildcat Canyon Community School</h2>
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Address</h3>
                    <p className="text-stone-700">
                      3800 Clark Road
                      <br />
                      El Sobrante, CA 94803
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Front Desk</h3>
                    <p className="text-stone-700">510.815.9332</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                    <p className="text-stone-700">
                      <a href="mailto:info@wildcatcanyon.org" className="text-amber-700 hover:text-amber-800">
                        info@wildcatcanyon.org
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Admissions</h3>
                    <p className="text-stone-700">510.815.9332</p>
                    <p className="text-stone-700">
                      <a href="mailto:admissions@wildcatcanyon.org" className="text-amber-700 hover:text-amber-800">
                        admissions@wildcatcanyon.org
                      </a>
                    </p>
                  </div>
                </div>

                {/* Tour CTA */}
                <div className="bg-sky-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-sky-900 mb-3">Arrange a Tour or Visit</h3>
                  <p className="text-stone-700 mb-4">
                    Arrange a visit today and discover Wildcat Canyon Community School. Applications for the 2024-2025
                    school year will continue to be accepted on a space-available basis only.
                  </p>
                  <Link href="/visit">
                    <Button className="bg-sky-600 hover:bg-sky-700 text-white">Schedule a Visit</Button>
                  </Link>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-amber-900 mb-6">Subscribe to our Newsletter</h3>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" type="text" className="mt-1" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required className="mt-1" placeholder="your.email@example.com" />
                    </div>
                    <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      Subscribe
                    </Button>
                  </form>
                </div>

                {/* Quick Links */}
                <div className="mt-8 bg-stone-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-stone-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/inquiry-form" className="block text-amber-700 hover:text-amber-800">
                      Inquiry Form
                    </Link>
                    <Link href="/admissions" className="block text-amber-700 hover:text-amber-800">
                      Admissions Process
                    </Link>
                    <Link href="/visit" className="block text-amber-700 hover:text-amber-800">
                      Schedule a Tour
                    </Link>
                    <Link href="/programs" className="block text-amber-700 hover:text-amber-800">
                      Our Programs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Link href="/inquiry-form">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">Inquire Now</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
