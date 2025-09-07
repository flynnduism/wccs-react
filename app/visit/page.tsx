import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-stone-50">

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-50 to-stone-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Visit Our Campus</h1>
            <p className="text-xl text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience our beautiful campus and learn about our Waldorf educational approach firsthand.
            </p>
          </div>
        </section>

        {/* Visit Options */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">Adult Tours</h2>
                <p className="text-stone-700 mb-4">
                  Join us for an adult-only tour to learn about our educational philosophy, see our facilities, and ask
                  questions without distractions.
                </p>
                <ul className="text-stone-600 space-y-2">
                  <li>• Duration: 1.5 hours</li>
                  <li>• Includes classroom visits</li>
                  <li>• Q&A with faculty</li>
                  <li>• Campus tour</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">Family Tours</h2>
                <p className="text-stone-700 mb-4">
                  Bring your children to experience our campus environment and see how they respond to our learning
                  spaces and community.
                </p>
                <ul className="text-stone-600 space-y-2">
                  <li>• Duration: 2 hours</li>
                  <li>• Child-friendly activities</li>
                  <li>• Playground time</li>
                  <li>• Meet current families</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tour Request Form */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Schedule Your Visit</h2>
              <p className="text-stone-700">
                Please fill out this form to request a tour. We'll contact you within 48 hours to confirm your visit.
              </p>
            </div>

            <form className="space-y-6">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name *</Label>
                    <Input id="first-name" type="text" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name *</Label>
                    <Input id="last-name" type="text" required className="mt-1" />
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

              {/* Tour Preferences */}
              <div className="pt-6 border-t border-stone-200">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Tour Preferences</h3>

                <div className="mb-4">
                  <Label htmlFor="tour-type">Tour Type *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select tour type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="adult">Adult Tour</SelectItem>
                      <SelectItem value="family">Family Tour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="preferred-date">Preferred Date</Label>
                    <Input id="preferred-date" type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="preferred-time">Preferred Time</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9:00 AM - 11:00 AM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (1:00 PM - 3:00 PM)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mb-4">
                  <Label htmlFor="group-size">Number of Adults Attending *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="more">More than 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <Label htmlFor="children-attending">Number of Children Attending (if family tour)</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="more">More than 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Child Information */}
              <div className="pt-6 border-t border-stone-200">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Child Information</h3>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="child-age">Child's Age</Label>
                    <Input id="child-age" type="text" className="mt-1" placeholder="e.g., 5 years old" />
                  </div>
                  <div>
                    <Label htmlFor="grade-interest">Grade of Interest</Label>
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
                </div>
              </div>

              {/* Additional Information */}
              <div className="pt-6 border-t border-stone-200">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Additional Information</h3>

                <div className="mb-4">
                  <Label htmlFor="questions">Questions or Special Requests</Label>
                  <Textarea
                    id="questions"
                    className="mt-1"
                    placeholder="Any specific areas of interest or questions you'd like addressed during the tour?"
                    rows={3}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter-signup" />
                    <Label htmlFor="newsletter-signup">I would like to receive the school newsletter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="event-updates" />
                    <Label htmlFor="event-updates">I would like to be notified about upcoming school events</Label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg">
                  Request Tour
                </Button>
              </div>

              <div className="text-sm text-stone-600 text-center">
                <p>
                  We'll contact you within 48 hours to confirm your tour date and time. Tours are typically scheduled on
                  weekdays during school hours.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
