import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function UpcomingEvents() {
  return (
    <section className="py-16 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sweet Pea Program */}
          <Card className="bg-white border-teal-200">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Sweet Pea Parent & Child</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-teal-700 mb-4 leading-relaxed">
                We are thrilled to announce our Fall Parent/Caregiver & Child Classes starting September 30th! Sweet
                Pea, our program for 18 – 36 months, is a rhythmic morning of songs, movement, play, handwork, snack,
                and conversation.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">Learn More</Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CFposterPREAUG20-791x1024-YQxvGzKjBvXzNpB8SnyfOvwkGdFFtUERr.jpeg"
                alt="Canyon Fest 2025 - A concert to benefit the WCCS Garden Program"
                width={400}
                height={500}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <Card className="bg-white border-teal-200">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Announcing Canyon Fest 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 mb-4 leading-relaxed">
                  Join us Sunday September 21st, 2 PM for a vibrant mini music festival in support of our school! This
                  benefit event is open to the public, and will feature a local Bay Area band, local arts, a curated mix
                  of local food and artisan vendors.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-teal-600">
                    <strong>Tickets on sale now!</strong> $45 pre-sale, $50 at the door.
                  </p>
                  <p className="text-sm text-teal-600">All proceeds will go to WCCS and our school garden program.</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white">Get Tickets</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
