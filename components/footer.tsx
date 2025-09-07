import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-teal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact Us</h3>
            <div className="space-y-2 text-teal-600">
              <p className="font-semibold">Wildcat Canyon Community School</p>
              <p>3800 Clark Road</p>
              <p>El Sobrante, CA 94803</p>
              <p>Phone: 510.635.5292</p>
              <a href="mailto:info@wildcatcanyon.org" className="block hover:text-primary">
                info@wildcatcanyon.org
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Programs</h3>
            <div className="space-y-2">
              <Link href="/early-childhood" className="block text-teal-600 hover:text-primary">
                Early Childhood
              </Link>
              <Link href="/lower-school" className="block text-teal-600 hover:text-primary">
                Lower School
              </Link>
              <Link href="/middle-school" className="block text-teal-600 hover:text-primary">
                Middle School
              </Link>
              <Link href="/sweet-pea" className="block text-teal-600 hover:text-primary">
                Sweet Pea Program
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Admissions</h3>
            <div className="space-y-2">
              <Link href="/visit" className="block text-teal-600 hover:text-primary">
                Visit Our Campus
              </Link>
              <Link href="/inquiry-form" className="block text-teal-600 hover:text-primary">
                Inquiry Form
              </Link>
              <Link href="/application-form" className="block text-teal-600 hover:text-primary">
                Application Form
              </Link>
              <Link href="/admissions" className="block text-teal-600 hover:text-primary">
                Admissions Process
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Community</h3>
            <div className="space-y-2 mb-6">
              <Link href="/community" className="block text-teal-600 hover:text-primary">
                Community Life
              </Link>
              <Link href="/blog" className="block text-teal-600 hover:text-primary">
                School Blog
              </Link>
              <Link href="/about" className="block text-teal-600 hover:text-primary">
                About WCCS
              </Link>
              <Link href="/faculty" className="block text-teal-600 hover:text-primary">
                Faculty & Staff
              </Link>
            </div>

            <div className="mt-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4_footer_logos_2021_minus-wecan.jpg-Vu3AcJCSycmlniH0ALKxo31ZbQd8xU.jpeg"
                alt="AWSNA, EBISA, and NAAEE organizational affiliations"
                width={300}
                height={120}
                className="w-full max-w-xs"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-teal-200 text-center text-sm text-teal-500">
          <p>
            © 2024 Wildcat Canyon Community School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
