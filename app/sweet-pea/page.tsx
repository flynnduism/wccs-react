import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function SweetPeaPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-50 to-stone-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Sweet Pea Parent Child</h1>
            <p className="text-xl text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              The first three years of a child's life are a precious time of unfolding development and bonding.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg prose-stone max-w-none mb-12">
              <p className="text-stone-700 leading-relaxed mb-6">
                Infants come into the world ready to connect with their parents and loved ones, while toddlers are
                rapidly developing their motor skills, exploring their world, trying to communicate with us, and
                learning how to interact with other people. On a deeper level, your infant or toddler is learning all
                about him- or herself, what the world is like, and his or her place in it.
              </p>
              <p className="text-stone-700 leading-relaxed mb-8">
                Our teacher-led classes offer parents, grandparents, and caregivers the opportunity to explore the
                rewarding and challenging task of raising young children. We share and discuss infant and toddler
                development, learn to observe and appreciate what babies are doing, and gain new ideas and strategies
                from Waldorf education.
              </p>
            </div>

            {/* Program Navigation */}
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Link
                href="#toddler"
                className="bg-sky-100 hover:bg-sky-200 px-6 py-3 rounded-lg text-sky-800 font-medium transition-colors"
              >
                Toddler Program
              </Link>
              <Link
                href="#infant"
                className="bg-sky-100 hover:bg-sky-200 px-6 py-3 rounded-lg text-sky-800 font-medium transition-colors"
              >
                Infant Program
              </Link>
            </div>
          </div>
        </section>

        {/* Toddler Program */}
        <section id="toddler" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Parent/Caregiver-Child Class</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-stone-700 leading-relaxed mb-6">
                  If your child is a toddler (18 – 32 months), come join us in a rhythmic morning of songs, movement,
                  play, handwork, snack, and conversation. This program offers a warm and nurturing environment where
                  you and your child can explore, learn, and grow together in nature's beauty.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Guided Observations:</strong> With the help of the teacher, you
                      will polish your skills to observe your child.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Engaging Activities:</strong> Age appropriate movement and
                      songs inspired by Waldorf principles.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Connection to Nature:</strong> Outdoor play and exploration in
                      our yard and beautiful canyon surroundings.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Community:</strong> Meet other families and build a supportive
                      community.
                    </div>
                  </li>
                </ul>

                <div className="bg-amber-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-amber-900 mb-2">Spring Program</h3>
                  <p className="text-stone-700 mb-2">Thursdays – April 17, 24, and May 1, 8, 15, 22, and 29</p>
                  <p className="text-stone-700 mb-2">8:45 am – 10:45 am in our Strawbale Classroom, Upper Field</p>
                  <p className="text-stone-700">
                    <strong>Cost:</strong> $300 (No drop-ins)
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3570-scaled.jpg-NMQrW7yj6NpB8SnyfOvwkGdFFtUERr.jpeg"
                  alt="Sweet Pea toddler program"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Infant Program */}
        <section id="infant" className="py-16 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Cradle Connections</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Cradle Connections, our Sweet Pea Parent/Caregiver & Child Classes for infants 0 to 12 months old, is
                  a six-week program that fosters meaningful connections between mothers and their infants. Through
                  shared experiences, soothing lullabies, sensory play, and guided conversations, this class creates a
                  sanctuary for families to celebrate the beauty of early parenthood.
                </p>

                <div className="bg-sky-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-sky-900 mb-2">Spring Program</h3>
                  <p className="text-stone-700 mb-2">Thursdays – April 17, 24, and May 1, 8, 15, 22, and 29</p>
                  <p className="text-stone-700 mb-2">11:15 am – 12:45 pm in our Strawbale Classroom, Upper Field</p>
                  <p className="text-stone-700">
                    <strong>Cost:</strong> $300
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-stone-200 rounded-lg aspect-[4/3] flex items-center justify-center mb-6">
                  <span className="text-stone-500">Infant Program Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teacher Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Teacher Shabana Shahbaz</h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Shabana is our beloved aftercare program's lead teacher and has been part of our school's community
                  since 2008 as a parent, volunteer, faculty member and resident Chai maker! She grew up in Pakistan and
                  studied math and English literature at Islamia University. She is multilingual in Urdu, Punjabi,
                  Hindi, and English.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  She completed her Waldorf Teacher Training and earned her Early Childhood Diploma through Rudolf
                  Steiner College in 2015.
                </p>
              </div>
              <div>
                <div className="bg-stone-200 rounded-lg aspect-square flex items-center justify-center">
                  <span className="text-stone-500">Teacher Photo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & CTA */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-stone-700 mb-6">
              For additional information, please contact us at{" "}
              <a href="mailto:info@wildcatcanyon.org" className="text-amber-700 hover:text-amber-800">
                info@wildcatcanyon.org
              </a>
            </p>
            <Link href="/inquiry-form">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">Inquire Now</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
