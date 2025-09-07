import { Hero } from "@/components/hero"

export default function CalendarPage() {
  return (
    <>
      <Hero 
        title="Calendar"
        subtitle="School calendar and important dates"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-YXSdK39jVMJKNYlRpT8yYQtGvJjW.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <h2>September 2025</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-primary text-white px-6 py-3">
              <h3 className="text-lg font-semibold mb-0">Upcoming Events</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-gray-700">
                <li><strong>September 1:</strong> Labor Day - No School</li>
                <li><strong>September 2:</strong> First Day - Willow Homeschool</li>
                <li><strong>September 4, 11, 18, 25:</strong> Early Release Days for Grades 3-8</li>
                <li><strong>September 7:</strong> CommuniTEA @ the Work Day hosted by Willow and 6th Grade</li>
                <li><strong>September 7:</strong> First Sunday Community Work Day (10am-3pm)</li>
                <li><strong>September 18:</strong> Back to School Night (5:30pm-8pm)</li>
                <li><strong>September 19:</strong> Teacher In Service Day - No School</li>
                <li><strong>September 21:</strong> Canyon Music Festival</li>
                <li><strong>September 29:</strong> Fall Festival</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-teal-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Stay Connected</h3>
            <p className="text-gray-700">
              For the most up-to-date calendar information and event details, please contact the school office or check with your child's teacher.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Wildcat Canyon Community School</strong><br/>
                3800 Clark Road<br/>
                El Sobrante, CA 94803
              </p>
              <p className="text-sm text-gray-600">
                <strong>Phone:</strong> <a href="tel:510-815-9332" className="text-primary">510.815.9332</a><br/>
                <strong>Email:</strong> <a href="mailto:info@wildcatcanyon.org" className="text-primary">info@wildcatcanyon.org</a>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}