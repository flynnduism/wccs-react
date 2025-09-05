import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ApplicationFormPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-50 to-stone-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Application Form</h1>
            <p className="text-xl text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Thank you for your interest in Wildcat Canyon Community School. Please complete this application form.
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-sky-900 mb-2">Self-Determined Fee System</h2>
              <p className="text-sky-800">
                Wildcat Canyon Community School operates on a self-determined fee system. We believe that financial
                circumstances should not be a barrier to accessing quality Waldorf education. Families determine their
                own tuition based on their financial capacity and commitment to the school community.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form className="space-y-8">
                {/* Family Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-amber-900 mb-6">Family Information</h2>

                  {/* Parent/Guardian 1 */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-stone-900 mb-4">Parent/Guardian 1</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="parent1-first">First Name *</Label>
                        <Input id="parent1-first" type="text" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="parent1-last">Last Name *</Label>
                        <Input id="parent1-last" type="text" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="parent1-email">Email *</Label>
                        <Input id="parent1-email" type="email" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="parent1-phone">Phone *</Label>
                        <Input id="parent1-phone" type="tel" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="parent1-occupation">Occupation</Label>
                        <Input id="parent1-occupation" type="text" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="parent1-employer">Employer</Label>
                        <Input id="parent1-employer" type="text" className="mt-1" />
                      </div>
                    </div>
                  </div>

                  {/* Parent/Guardian 2 */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-stone-900 mb-4">Parent/Guardian 2 (if applicable)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="parent2-first">First Name</Label>
                        <Input id="parent2-first" type="text" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="parent2-last">Last Name</Label>
                        <Input id="parent2-last" type="text" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="parent2-email">Email</Label>
                        <Input id="parent2-email" type="email" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="parent2-phone">Phone</Label>
                        <Input id="parent2-phone" type="tel" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="parent2-occupation">Occupation</Label>
                        <Input id="parent2-occupation" type="text" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="parent2-employer">Employer</Label>
                        <Input id="parent2-employer" type="text" className="mt-1" />
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="text-lg font-medium text-stone-900 mb-4">Home Address</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Street Address *</Label>
                        <Input id="address" type="text" required className="mt-1" />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input id="city" type="text" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input id="state" type="text" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="zip">ZIP Code *</Label>
                          <Input id="zip" type="text" required className="mt-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Student Information */}
                <div className="pt-8 border-t border-stone-200">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-6">Student Information</h2>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="student-first">Student First Name *</Label>
                      <Input id="student-first" type="text" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="student-last">Student Last Name *</Label>
                      <Input id="student-last" type="text" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="student-birthdate">Date of Birth *</Label>
                      <Input id="student-birthdate" type="date" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="student-gender">Gender</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="non-binary">Non-binary</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="applying-grade">Grade Applying For *</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sweet-pea">Sweet Pea (Parent-Child)</SelectItem>
                        <SelectItem value="preschool">Preschool</SelectItem>
                        <SelectItem value="kindergarten">Kindergarten</SelectItem>
                        <SelectItem value="grade-1">Grade 1</SelectItem>
                        <SelectItem value="grade-2">Grade 2</SelectItem>
                        <SelectItem value="grade-3">Grade 3</SelectItem>
                        <SelectItem value="grade-4">Grade 4</SelectItem>
                        <SelectItem value="grade-5">Grade 5</SelectItem>
                        <SelectItem value="grade-6">Grade 6</SelectItem>
                        <SelectItem value="grade-7">Grade 7</SelectItem>
                        <SelectItem value="grade-8">Grade 8</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="school-year-applying">School Year *</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select school year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-2025">2024-2025</SelectItem>
                        <SelectItem value="2025-2026">2025-2026</SelectItem>
                        <SelectItem value="2026-2027">2026-2027</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Educational Background */}
                <div className="pt-8 border-t border-stone-200">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-6">Educational Background</h2>

                  <div className="mb-6">
                    <Label htmlFor="current-school">Current School/Program</Label>
                    <Input id="current-school" type="text" className="mt-1" />
                  </div>

                  <div className="mb-6">
                    <Label>Has your child attended a Waldorf school before?</Label>
                    <RadioGroup className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="waldorf-yes" />
                        <Label htmlFor="waldorf-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="waldorf-no" />
                        <Label htmlFor="waldorf-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="waldorf-details">If yes, please provide details</Label>
                    <Textarea
                      id="waldorf-details"
                      className="mt-1"
                      placeholder="School name, grades attended, years, etc."
                      rows={3}
                    />
                  </div>
                </div>

                {/* Family Essays */}
                <div className="pt-8 border-t border-stone-200">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-6">Family Essays</h2>

                  <div className="mb-6">
                    <Label htmlFor="why-waldorf">Why are you interested in Waldorf education for your child? *</Label>
                    <Textarea
                      id="why-waldorf"
                      required
                      className="mt-1"
                      placeholder="Please share your understanding of and interest in Waldorf education"
                      rows={5}
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="child-description">Please describe your child *</Label>
                    <Textarea
                      id="child-description"
                      required
                      className="mt-1"
                      placeholder="Interests, personality, learning style, challenges, strengths, etc."
                      rows={5}
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="family-contribution">
                      How do you envision your family contributing to the school community? *
                    </Label>
                    <Textarea
                      id="family-contribution"
                      required
                      className="mt-1"
                      placeholder="Volunteer opportunities, skills you can share, community involvement, etc."
                      rows={4}
                    />
                  </div>
                </div>

                {/* Self-Determined Fee */}
                <div className="pt-8 border-t border-stone-200">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-6">Self-Determined Fee Commitment</h2>

                  <div className="bg-amber-50 p-6 rounded-lg mb-6">
                    <p className="text-amber-900 mb-4">
                      Our self-determined fee system allows families to set their own tuition based on their financial
                      capacity and commitment to the school. We ask that you consider your family's financial situation
                      thoughtfully and contribute what you can to support our educational mission.
                    </p>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="fee-commitment">Annual Fee Commitment *</Label>
                    <Input
                      id="fee-commitment"
                      type="number"
                      required
                      className="mt-1"
                      placeholder="Enter your annual fee commitment"
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="fee-explanation">Please explain how you determined this amount</Label>
                    <Textarea
                      id="fee-explanation"
                      className="mt-1"
                      placeholder="Optional: Share your reasoning for this fee commitment"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Agreements */}
                <div className="pt-8 border-t border-stone-200">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-6">Agreements</h2>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="parent-handbook" required />
                      <Label htmlFor="parent-handbook" className="text-sm">
                        I have read and agree to abide by the Parent Handbook and school policies *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="volunteer-commitment" required />
                      <Label htmlFor="volunteer-commitment" className="text-sm">
                        I understand the volunteer requirements and commit to participating in school community
                        activities *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="fee-commitment-agreement" required />
                      <Label htmlFor="fee-commitment-agreement" className="text-sm">
                        I commit to paying the self-determined fee amount indicated above *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="information-accuracy" required />
                      <Label htmlFor="information-accuracy" className="text-sm">
                        I certify that all information provided in this application is accurate and complete *
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg">
                    Submit Application
                  </Button>
                </div>

                <div className="text-sm text-stone-600 text-center">
                  <p>
                    Applications are reviewed on a rolling basis. You will be contacted within 2 weeks of submission to
                    schedule an interview and discuss next steps in the admissions process.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
