import { Hero } from "@/components/hero"
import { ProgramsOverview } from "@/components/programs-overview"
import { UpcomingEvents } from "@/components/upcoming-events"
import { LandAcknowledgment } from "@/components/land-acknowledgment"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProgramsOverview />
      <UpcomingEvents />
      <LandAcknowledgment />
      <NewsletterSignup />
    </main>
  )
}
