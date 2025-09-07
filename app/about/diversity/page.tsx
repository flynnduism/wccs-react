import { Hero } from "@/components/hero"

export default function DiversityPage() {
  return (
    <>
      <Hero 
        title="Diversity"
        subtitle=""
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-YXSdK39jVMJKNYlRpT8yYQtGvJjW.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <h2>Diversity, Equity and Inclusion</h2>
          
          <p>
            We at Wildcat Canyon Community School (WCCS) understand that no single statement creates diversity, equity, and inclusion…only active shifts in consciousness and a true commitment to more just ways of being. This includes (but is not limited to) our hiring and retention, enrollment outreach, tuition model, curriculum implementation, governance structure, and communications, among other actions that create a felt sense of belonging for all students and families.
          </p>
          
          <p>
            We at WCCS remain committed to an increased consciousness and correction of systemic injustices. This includes anti-racist and non-discriminatory trainings for faculty and families; pay equity amongst school staff; a sliding-scale tuition model**; a co-operative school governance structure ("Circles"); the pursuit of land justice through a rematriation process***; evolving the Waldorf pedagogy to a 21st century understanding of diversity; and a restorative, transformative justice approach to conflict resolution that honors the community's many perspectives and experiences, including acknowledgement of multiple structural and institutional oppressions facing many members of the school and broader community.
          </p>
          
          <p>
            In order to authentically enact the principles of land-based justice, we at WCCS believe it is core to our healing and reconciliation of past harms to pay tribute both in spirit and in fact. WCCS is committed to paying $1,200 annually as our Shuumi Land Tax, a small step towards acknowledging and supporting the Ohlone people and Bay Area Indigenous community. For more information, please visit the <a href="#" className="text-primary">Sogorea Te' Land Trust's website</a>. We encourage families attending the school to consider making individual contributions as well.
          </p>
          
          <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
            "The goal of Waldorf education is to…liberate the spiritual essence of the child, to remove all obstacles and hindrances, and to make possible the full child's talents for later services on behalf of humanity." -Theodore Huebner
          </blockquote>
          
          <p>
            Institutional racism and discrimination can be found within the curriculum, pedagogy and hiring practices of many to most educational spaces within the U.S. and is not unique to a Waldorf education, however we wish to state clearly that we at WCCS explicitly renounce any and all ties to racist statements made by Rudolf Steiner or any other historical figures associated with Waldorf education. We are committed to the ongoing work of evolving the Waldorf pedagogy to meet the needs of a diverse, 21st century community.
          </p>
          
          <p>
            We align ourselves with the <a href="#" className="text-primary">Association of Waldorf Schools of North America (AWSNA) Statement on Equity and Racial Justice</a>, which acknowledges the impact of racism within Waldorf education and commits to addressing these issues through concrete actions and accountability measures.
          </p>
          
        </div>
      </div>
    </>
  )
}