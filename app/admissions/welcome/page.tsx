export default function WelcomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf8ea' }}>
      {/* Header Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 
            className="text-4xl md:text-5xl mb-6" 
            style={{ 
              fontFamily: 'Sacramento, cursive', 
              color: '#27646c',
              fontWeight: 'normal'
            }}
          >
            Welcome to the 2025-2026 Application Season!
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div 
          className="text-lg leading-relaxed space-y-6"
          style={{ 
            fontFamily: 'Lato, sans-serif',
            fontSize: '17px',
            lineHeight: '23px'
          }}
        >
          <p><strong>Dear Prospective Families,</strong></p>
          
          <p>
            At Wildcat Canyon Community School, we seek to cultivate curious lifelong learners through an engaging and fully immersive curriculum. We lead the way in a holistic, intentional, developmental approach to education from PreK-8th grade. We are a parent/teacher cooperative with a mission of accessibility, inclusion, and Waldorf education.
          </p>
          
          <p>
            Set on 91 acres, our campus is home to trails, a creek, multiple play areas, chickens, a woodworking shop, an abundant garden, and so much more! Discover for yourself why families choose Wildcat Canyon Community School.
          </p>
          
          <p>
            We invite you to start your WCCS journey with our <a href="https://vimeo.com/517727797" className="font-bold" style={{ color: '#27646c' }}>Virtual Tour</a>. Over the course of the fall and winter, we will provide many opportunities to learn more about us through <a href="/admissions" style={{ color: '#27646c' }}>Tours, Virtual Info Sessions and Open Houses</a>, and much more! On the following web pages, you will find information to make your application process to WCCS go as smoothly as possible. Selecting an independent school for your child/ren can be quite daunting, yet exciting—so please don't hesitate to <a href="mailto:admissions@wildcatcanyon.org" className="font-bold" style={{ color: '#27646c' }}>contact us</a> with questions along your journey.
          </p>
          
          <p>We look forward to meeting and learning more about you throughout the year's admissions process!</p>
          
          <p>In community,</p>
          
          <p><em>The Admissions Circle</em></p>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-300" />
        
        {/* At-A-Glance Section */}
        <div className="mb-12">
          <h2 
            className="text-2xl font-bold mb-8" 
            style={{ 
              fontFamily: 'Roboto Slab, serif',
              color: '#27646c'
            }}
          >
            WCCS AT-A-GLANCE:
          </h2>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div 
              className="space-y-4"
              style={{ 
                fontFamily: 'Lato, sans-serif',
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p><strong>Pre-K through 8th grade</strong></p>
                  <p><strong>Founded in 2020</strong> as a teacher/parent cooperative</p>
                  <p><strong>Blossomed from East Bay Waldorf School</strong> (founded in 1980)</p>
                  <p><strong>An Early Childhood Homeschool Enrichment Program</strong></p>
                </div>
                <div className="space-y-3">
                  <p><strong style={{ color: '#27646c' }}>91</strong> acres the campus is located on in El Sobrante</p>
                  <p><strong style={{ color: '#27646c' }}>193</strong> students</p>
                  <p><strong style={{ color: '#27646c' }}>12</strong> students per Pre-K class</p>
                  <p><strong style={{ color: '#27646c' }}>18</strong> students per Kinder class on average</p>
                  <p><strong style={{ color: '#27646c' }}>22</strong> students per class in the lower grades on average</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="/inquiry-form"
            className="inline-block px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            style={{ 
              backgroundColor: '#27646c',
              fontFamily: 'Lato, sans-serif',
              fontSize: '16px'
            }}
          >
            Inquire Now
          </a>
        </div>
      </div>
    </div>
  )
}