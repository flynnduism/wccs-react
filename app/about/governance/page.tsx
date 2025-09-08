import { Hero } from "@/components/hero"

export default function GovernancePage() {
  return (
    <>
      <Hero 
        title="Governance"
        subtitle="Leadership and governance structure at WCCS"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-YXSdK39jVMJKNYlRpT8yYQtGvJjW.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>
            Wildcat Canyon is an independent AWSNA-Registered Initiative school; self-managed and collaboratively led by four bodies: the faculty, the administration, the Circle of Trustees, and the community.
          </p>
          
          <p>
            Our view is that governance is a framework that should be designed to free up human capacity—allowing a place where we can meet each other as equals, respecting individuality and each one's higher inspiration—while providing a context for effective decision-making.
          </p>
          
          <p>
            These groups work collaboratively to accomplish the full range of the school's necessary functions in pursuit of our educational Purpose and Path—from the day-to-day and year-to-year operations of a Parent-Child program to 8th grade to the conception and implementation of the school's strategic plan. This collaborative organization is enabled by organizational design elements such as cross-membership of key groups, faculty committee work, participation in functional meetings and frequent communication.
          </p>

          <h3>The Faculty</h3>
          
          <h4>Holds pedagogical leadership and actualization of the Purpose and Path through:</h4>
          
          <ul>
            <li>Teaching and curriculum development</li>
            <li>Teacher selection and development</li>
            <li>Student selection</li>
            <li>Strategic vision and Purpose and Path renewal</li>
          </ul>

          <h3>The Administration</h3>
          
          <h4>Manages and develops resources in service to the school's Purpose and Path by:</h4>
          
          <ul>
            <li>Implementing policies and plans</li>
            <li>Managing human resources</li>
            <li>Facilitating daily school operations</li>
          </ul>

          <h3>Circle of Trustees</h3>
          
          <h4>Has four governance responsibilities:</h4>
          
          <ul>
            <li>Supporting the school's Purpose and Path and ensuring the long-term sustainability of the school in pursuit of that Purpose and Path</li>
            <li>Providing financial oversight</li>
            <li>Ensuring compliance with all applicable laws and regulations, and</li>
            <li>Working in collaboration with the school leadership to support the pedagogical goals of the school.</li>
          </ul>

          <h3>The Community</h3>
          
          <h4>Cooperatively sustains many of the operational needs of a vibrant and thriving school:</h4>
          
          <ul>
            <li>Through Dynamic Governance, or "Circles"</li>
            <li>Via consensus-based decision making</li>
            <li>Upholding the school's Purpose and Path</li>
            <li>See our Circle structure (click to enlarge)</li>
          </ul>

          <h4><strong>Circle of Trustees</strong></h4>
          
          <ul>
            <li>Gingi Allen</li>
            <li>Jubilee Daniels</li>
            <li>Melanie Hatch</li>
            <li>Fahad Khan</li>
            <li>Alvin Lopez</li>
          </ul>
        </div>
      </div>
    </>
  )
}