import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function InquiryFormPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-50 to-stone-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Inquire</h1>
            <p className="text-xl text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're excited to learn more about your family and share information about our school community.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form className="space-y-6">
                {/* Parent/Guardian Information */}
                <div>
                  <h2 className="text-2xl font-semibold text-amber-900 mb-6">Parent/Guardian Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parent-first-name">First Name *</Label>
                      <Input id="parent-first-name" type="text" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="parent-last-name">Last Name *</Label>
                      <Input id="parent-last-name" type="text" required className="mt-1" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" type="text" className="mt-1" />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" type="text" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" type="text" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" type="text" className="mt-1" />
                  </div>
                </div>

                {/* Child Information */}
                <div className="pt-6 border-t border-stone-200">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-6">Child Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="child-first-name">Child's First Name *</Label>
                      <Input id="child-first-name" type="text" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="child-last-name">Child's Last Name *</Label>
                      <Input id="child-last-name" type="text" required className="mt-1" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="child-birthdate">Date of Birth *</Label>
                    <Input id="child-birthdate" type="date" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="current-grade">Current Grade/Program</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select current grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="not-in-school">Not yet in school</SelectItem>
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
                </div>

                <div>
                  <Label htmlFor="grade-interest">Grade/Program of Interest *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select grade of interest" />
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

                <div>
                  <Label htmlFor="school-year">School Year of Interest *</Label>
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

                {/* Additional Information */}
                <div className="pt-6 border-t border-stone-200">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-6">Additional Information</h2>
                  <div>
                    <Label htmlFor="current-school">Current School (if applicable)</Label>
                    <Input id="current-school" type="text" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="waldorf-experience">Previous Waldorf Experience</Label>
                  <Textarea
                    id="waldorf-experience"
                    className="mt-1"
                    placeholder="Please describe any previous experience with Waldorf education"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="questions">Questions or Comments</Label>
                  <Textarea
                    id="questions"
                    className="mt-1"
                    placeholder="Please share any questions about our school or specific needs for your child"
                    rows={4}
                  />
                </div>

                {/* Tour Interest */}
                <div className="pt-6 border-t border-stone-200">
                  <h2 className="text-2xl font-semibold text-amber-900 mb-6">Tour Interest</h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tour-interest" />
                      <Label htmlFor="tour-interest">I am interested in scheduling a tour</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="open-house" />
                      <Label htmlFor="open-house">I am interested in attending an open house</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter">I would like to receive the school newsletter</Label>
                    </div>
                  </div>
                </div>

                {/* How did you hear about us */}
                <div>
                  <Label htmlFor="referral">How did you hear about Wildcat Canyon Community School?</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website/Internet search</SelectItem>
                      <SelectItem value="friend">Friend or family member</SelectItem>
                      <SelectItem value="current-parent">Current parent</SelectItem>
                      <SelectItem value="alumni">Alumni family</SelectItem>
                      <SelectItem value="social-media">Social media</SelectItem>
                      <SelectItem value="event">School event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg">
                    Submit Inquiry
                  </Button>
                </div>

                <div className="text-sm text-stone-600 text-center">
                  <p>
                    By submitting this form, you agree to be contacted by Wildcat Canyon Community School regarding your
                    inquiry. We respect your privacy and will not share your information with third parties.
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
