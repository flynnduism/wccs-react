import { Hero } from "@/components/hero"

export default function AffordingPage() {
  return (
    <>
      <Hero 
        title="Affording WCCS"
        subtitle="Tuition, financial aid, and payment options"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-YXSdK39jVMJKNYlRpT8yYQtGvJjW.jpg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <h2>Tuition & Financial Accessibility</h2>
          
          <p>
            At WCCS, we believe that high-quality Waldorf education should be accessible to families from all economic backgrounds. We are committed to making our educational experience available to a diverse community through our flexible tuition model.
          </p>
          
          <div className="bg-teal-50 border-l-4 border-primary p-6 mb-8">
            <p className="font-semibold text-primary mb-2">Our Commitment to Accessibility</p>
            <p className="italic">
              "WCCS uses a tiered tuition model and more than half of the families pay below the True Cost of tuition."
            </p>
          </div>
          
          <h3>Tiered Tuition Model</h3>
          
          <p>
            We use a tiered tuition structure that allows families to contribute according to their financial capacity. This model ensures that dedicated families can access our educational community regardless of their economic circumstances.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-primary mb-3">Budding Tier</h4>
              <p className="text-gray-700">
                Our base tuition level that makes WCCS education accessible to many families while supporting the school's operations.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-primary mb-3">True Cost Tier</h4>
              <p className="text-gray-700">
                The full cost of providing our educational program, including all operational expenses and facility maintenance.
              </p>
            </div>
          </div>
          
          <h3>Additional Financial Support</h3>
          
          <p>
            For families who need assistance beyond our Budding tier, we offer indexed tuition options based on financial need. We believe that no child should be turned away from our educational community due to financial circumstances.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
            <h4 className="font-semibold text-amber-800 mb-2">How to Apply for Financial Assistance</h4>
            <p className="text-amber-700 mb-3">
              If you need to pay below the Budding tier or require additional financial assistance, please contact our tuition office:
            </p>
            <p className="font-medium">
              <a href="mailto:tuition@wildcatcanyon.org" className="text-primary hover:underline">
                tuition@wildcatcanyon.org
              </a>
            </p>
          </div>
          
          <h3>Our Philosophy</h3>
          
          <p>
            We operate as a parent/teacher cooperative with the understanding that education is a community investment. Families contribute not only financially but also through volunteer hours, expertise, and active participation in our school community.
          </p>
          
          <div className="text-center mt-12">
            <h4 className="text-xl font-semibold text-primary mb-4">Ready to Learn More?</h4>
            <p className="mb-6">
              Contact us to discuss how we can make WCCS accessible for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:tuition@wildcatcanyon.org" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center no-underline"
              >
                Contact Tuition Office
              </a>
              <a 
                href="/inquiry-form" 
                className="border border-primary text-primary hover:bg-teal-50 px-6 py-3 rounded-lg font-medium transition-colors text-center no-underline"
              >
                Submit Inquiry
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}