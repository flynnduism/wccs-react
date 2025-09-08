import { Hero } from "@/components/hero"

export default function MethodsPage() {
  return (
    <>
      <Hero 
        title="Our Curriculum and Methods"
        subtitle="Exploring our teaching methodologies and curriculum design"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-YXSdK39jVMJKNYlRpT8yYQtGvJjW.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Our progressive approach builds capacities students need for the future</h2>
          
          <p>
            The curriculum is visibly engaging and gives children a natural way into learning. Based on Rudolf Steiner's developmental insights, it carefully matches children's thinking capacities to their age and aligns with children's emotional phases. It provides a developmental "ascending spiral of knowledge."
          </p>
          
          <p>
            While the 2nd grader hears fables, the 8th grader studies historical revolutions to match the revolution they may feel inside.
          </p>
          
          <p>
            What children need to learn is carefully calibrated to where they are developmentally, making learning naturally appealing.
          </p>

          <h3>Teaching Methods</h3>
          
          <p>
            Our "multiple intelligences" approach is inherently engaging, builds various student capacities, and reaches different learning styles.
          </p>
          
          <p>
            The goal is for students to develop capacities like:
          </p>
          
          <ul>
            <li>Understanding complexity</li>
            <li>Linking verbal and visual thinking</li>
            <li>Discovering personal strengths</li>
            <li>Connecting thinking to feelings and initiative</li>
          </ul>

          <h3>Multiple Intelligences Framework</h3>
          
          <p>
            Our curriculum engages Howard Gardner's eight intelligences:
          </p>
          
          <ul>
            <li><strong>Spatial</strong> - Visual and spatial processing</li>
            <li><strong>Bodily-kinesthetic</strong> - Physical movement and coordination</li>
            <li><strong>Musical</strong> - Sound, rhythm, and musical patterns</li>
            <li><strong>Linguistic</strong> - Words and language</li>
            <li><strong>Logical-mathematical</strong> - Logic, abstraction, and numbers</li>
            <li><strong>Interpersonal</strong> - Understanding others and social situations</li>
            <li><strong>Intrapersonal</strong> - Self-awareness and reflection</li>
            <li><strong>Naturalistic</strong> - Nature and environmental patterns</li>
          </ul>

          <h3>Educational Implications</h3>
          
          <p>
            This approach supports individualization and pluralization of teaching methods, ensuring every child can access learning through their strengths while developing areas of growth.
          </p>
        </div>
      </div>
    </>
  )
}