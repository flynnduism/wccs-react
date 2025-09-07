import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3570-scaled.jpg-NMQrW7yj6NpB8SnyfOvwkGdFFtUERr.jpeg"
          alt="Diverse children smiling together at Wildcat Canyon Community School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto text-pretty leading-relaxed font-medium drop-shadow-lg">
          Wildcat Canyon Community School is reimagining Waldorf education and seeks to provide an inclusive, joyful,
          and immersive learning experience where students, PreK-8th, develop deep connections to the indigenous land,
          the seasons, self, and the community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/inquiry-form">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 shadow-lg">
              Inquire Now
            </Button>
          </Link>
          <Link href="/visit">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 bg-white/10 backdrop-blur-sm shadow-lg"
            >
              Schedule a Visit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
