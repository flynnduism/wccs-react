import { Hero } from "@/components/hero"

export default function BreakCampsPage() {
  return (
    <>
      <Hero 
        title="Break Camps"
        subtitle="Fun and educational camps during school breaks"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-YXSdK39jVMJKNYlRpT8yYQtGvJjW.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>
            Let us care for your little gnome during the holiday breaks! Wildcat Canyon Community School offers weekly camps filled with adventure, art, and exploration.
          </p>

          <h3>Grades Camp (for grades 1-5)</h3>
          <p>
            Provides a fun and rhythmic daily flow with creative projects, interactive games, and outdoor adventures. Campers build friendships across grade levels in small group settings.
          </p>

          <h3>Preschool Camp</h3>
          <p>
            Rooted in Waldorf early childhood principles, focusing on a warm environment with outdoor play, imagination, and gentle daily rhythms.
          </p>

          <div className="bg-teal-50 border-l-4 border-primary p-6 my-8 italic text-lg">
            <p>Where creativity and exploration thrive!</p>
          </div>

          <h3>Summer Camp Programs</h3>

          <h4>Wild Wonders Camp (Ages 5-8)</h4>
          <ul>
            <li>Dates: June 16th-20th and June 23rd-27th</li>
            <li>Cost: $300 for WCCS families, $400 for non-WCCS families (early bird rates)</li>
            <li>Activities include exploring the 91-acre campus, nature crafts, and garden foraging</li>
          </ul>

          <h4>Games and Movement Camp (Ages 7-10)</h4>
          <ul>
            <li>Dates: July 7th-11th, July 14th-18th, July 21st-25th, July 28th-Aug 1st</li>
            <li>Cost: $300-$450 depending on registration timing</li>
            <li>Focuses on cooperative games, teamwork, and movement skills</li>
          </ul>

          <h4>In Your Element Camp (Ages 5-7)</h4>
          <ul>
            <li>Dates: July 7th-11th through July 28th-Aug 1st</li>
            <li>Cost: $300-$450 depending on registration timing</li>
            <li>Themed weeks exploring Earth, Fire, Water, and Wind through activities and outdoor adventures</li>
          </ul>

          <h4>Little Gnomes Camp (Ages 3-4)</h4>
          <ul>
            <li>Dates: July 7th-11th through July 28th-Aug 1st</li>
            <li>Cost: $300-$450 depending on registration timing</li>
            <li>Waldorf-inspired preschool camp with nature exploration and storytelling</li>
          </ul>

          <p><strong>All camps run Monday-Thursday 9am-3pm, with Friday hours 9am-1pm.</strong></p>
        </div>
      </div>
    </>
  )
}