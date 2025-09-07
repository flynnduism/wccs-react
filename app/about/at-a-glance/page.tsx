import { Hero } from "@/components/hero"

export default function AtAGlancePage() {
  return (
    <>
      <Hero 
        title="Our Purpose and Path"
        subtitle=""
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-YXSdK39jVMJKNYlRpT8yYQtGvJjW.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <div className="bg-teal-50 border-l-4 border-primary p-6 mb-8 italic text-lg">
            <p>
              Wildcat Canyon Community School is reimagining Waldorf education and seeks to provide an inclusive, joyful, and immersive learning experience where students, Prek-8th, develop deep connections to the indigenous land, the seasons, self, and the community.
            </p>
          </div>
          
          <h3>WCCS Origin Story</h3>
          
          <p>
            After the closure of East Bay Waldorf School during the pandemic, Wildcat Canyon Community School sprouted from the compost of the former school. Inspired by the structure of backyard class pods that organically and collectively emerged during the year of pandemic closure, we reopened our doors as a parent/teacher cooperative with a mission of accessibility, inclusion, and Waldorf-inspired education. WCCS is a startup, grassroots school drawing its name from our beautiful campus adjacent to Wildcat Canyon. We are an independent AWSNA accredited school, self-managed and collaboratively led by three bodies: the faculty, the cooperative administration, and the Circle of Trustees.
          </p>
          
          <p>
            Following is our version of a mission statement, our aspirational, "North Star" <strong>Purpose</strong> and the <strong>Path</strong> of how we hope to get there. This is a journey we started just a few years ago, and we are at the earlier stages of the path.
          </p>
          
          <h3>WCCS Purpose</h3>
          
          <p>
            We aspire to co-create a world where the highest ideals of our educational methods are accessible to every child. Where belonging and peace are rights held by all. Where education includes healthy spiritual development, and joy in learning becomes a stepping stone to meaningful change in the world. Where we honor the land, the wisdom of our elders and ancestors, and duty to the generations to come.
          </p>
          
          <h3>WCCS Path</h3>
          
          <p>
            Wildcat Canyon Community School embraces a progressive approach to Waldorf education in which the curriculum is continually regenerated for relevance in the present time. We honor the child's natural phases of learning and ignite the spark of individuality in each child, developing a lifelong commitment to learning, creativity, and social responsibility. WCCS is committed to dynamic governance by the teachers and cooperative community leadership; an economic model that values people over money; uplifting social, racial, and land justice in all domains; and ongoing training and practice in restorative and transformative justice approaches to conflict resolution.
          </p>
          
        </div>
      </div>
    </>
  )
}