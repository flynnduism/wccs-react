import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-50 to-stone-100 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Faculty & Staff</h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4">Teaching is an Art</h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Our teachers are artists. Each year, they work to update the curriculum for this place, this time, and
                their particular class. They teach through story, art, lecture, and experience. They look inward as well
                as outward, working to serve as a model for your child of how to be in the world.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                We are fortunate to have an incredibly talented and dedicated group of teachers and staff to guide your
                child's education. The majority of our teachers are Waldorf-trained.
              </p>
              <blockquote className="text-xl italic text-amber-800 border-l-4 border-amber-300 pl-6 mb-8">
                "Receive the children in reverence; educate them in love; let them go forth in freedom."
                <footer className="text-base mt-2 text-stone-600">— Rudolf Steiner</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Early Childhood Teachers */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Early Childhood Teachers</h2>

            <Accordion type="single" collapsible className="space-y-6">
              {/* Loveleen Dhillon */}
              <AccordionItem value="loveleen" className="bg-stone-50 rounded-lg border-0">
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex items-center gap-6 text-left">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/professional-headshot-of-smiling-woman-with-dark-h.jpg"
                        alt="Loveleen Dhillon"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-800">Loveleen Dhillon</h3>
                      <p className="text-amber-700 font-medium">Preschool Director & Apple Blossom PreK Lead Teacher</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="pt-4 space-y-4">
                    <p className="text-stone-700 leading-relaxed">
                      Loveleen (she/her) holds a Masters Degree in Educational Psychology with a focus on Child, Family,
                      and Community. She has 20 years of experience working with young children. Loveleen also worked
                      with mental health programs, and has 10 years of experience as a Case Manager for children with
                      special needs. Loveleen completed her Waldorf Teacher Training at Bay Area Center for Waldorf
                      Teacher Training.
                    </p>
                    <p className="text-stone-700 leading-relaxed">
                      It is Loveleen's daughter Ananda, that brought her to WCCS 8 years ago as she and her husband John
                      searched for a preschool for their daughter. They first saw the beauty of the campus on their
                      daily walks as a family and then fell in love with the beauty of the education as they learned
                      about the holistic view of the human being innate in Waldorf philosophy.
                    </p>
                    <p className="text-stone-700 leading-relaxed">
                      Ananda has flourished at the school and enters 6th grade this year.
                    </p>
                    <p className="text-stone-700 leading-relaxed">
                      Loveleen looks forward to all that is to come in the work of the preschool and lives of the
                      children and families at the school.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Joanna Meinl */}
              <AccordionItem value="joanna" className="bg-stone-50 rounded-lg border-0">
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex items-center gap-6 text-left">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/professional-headshot-of-smiling-woman-with-brown-.jpg"
                        alt="Joanna Meinl"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-800">Joanna Meinl</h3>
                      <p className="text-amber-700 font-medium">Apple Blossom Assistant</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="pt-4">
                    <p className="text-stone-700 leading-relaxed">
                      Joanna (she/her) is a mama, dance maker, arts educator, crafter and nature lover. She has a BA in
                      Dance and Anthropology, has taught dance to children and adults for over twenty years and just
                      recently received her Associate Teachers certificate. She's been part of the community since her
                      daughter was in preschool in the Apple Blossom class of 2018 and is so excited to be joining the
                      Early Childhood education team.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Candace Ellis */}
              <AccordionItem value="candace" className="bg-stone-50 rounded-lg border-0">
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex items-center gap-6 text-left">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/professional-headshot-of-smiling-woman-with-brown-.jpg"
                        alt="Candace Ellis"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-800">Candace Ellis</h3>
                      <p className="text-amber-700 font-medium">Daisy PreK Teacher</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="pt-4 space-y-4">
                    <p className="text-stone-700 leading-relaxed">
                      Candace has enjoyed working with young children and their families for nearly 20 years. She
                      graduated from the Bay Area Center for Waldorf Teacher Training in 2016 and has taught both
                      Kindergarten and Preschool in a variety of indoor and outdoor settings while holding
                      administrative roles in Early Childhood programs as well.
                    </p>
                    <p className="text-stone-700 leading-relaxed">
                      As a teacher, Candace strives to create and foster a learning environment which is beautiful,
                      inspiring and natural for the growing child. She is passionate about protecting what she believes
                      to be the "sacred seed of childhood."
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Catalina Edwards */}
              <AccordionItem value="catalina" className="bg-stone-50 rounded-lg border-0">
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex items-center gap-6 text-left">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/professional-headshot-of-smiling-woman-with-dark-h.jpg"
                        alt="Catalina Edwards"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-800">Catalina Edwards</h3>
                      <p className="text-amber-700 font-medium">Fern Kindergarten Lead Teacher</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="pt-4">
                    <p className="text-stone-700 leading-relaxed">
                      From Colombia to the California Bay Area, Catalina Edwards' diverse path as an actress and
                      musician ultimately led her to Waldorf early childhood education. She deeply connects with
                      Waldorf's holistic approach, especially its reverence for the Earth. Catalina completed one year
                      of Anthroposophical studies at BACWTT and obtained her Early Childhood Waldorf Certificate from
                      Sound Circle Center for the Arts and Anthroposophy in Seattle, WA.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Grades Teachers */}
        <section className="py-16 bg-stone-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Grades Teachers</h2>

            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="ben" className="bg-white rounded-lg border-0">
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex items-center gap-6 text-left">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/bearded-man-headshot.png"
                        alt="Ben Shalom"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-800">Ben Shalom</h3>
                      <p className="text-amber-700 font-medium">1st Grade Teacher</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="pt-4">
                    <p className="text-stone-700 leading-relaxed">
                      Ben is a Bay Area native, who graduated from Humboldt State with a degree in biology. He found a
                      passion for forests and beaches, which has continued to this day. Bringing that enthusiasm into
                      the classroom, he taught middle school science for 6 years, before taking a sabbatical. During his
                      year off, his research into spirituality led him to discover the works of Rudolf Steiner and
                      Anthroposophy, and eventually to Waldorf and to the Bay Area Center for Waldorf Teacher Training.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="momo" className="bg-white rounded-lg border-0">
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex items-center gap-6 text-left">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/professional-headshot-dark-hair-woman.png"
                        alt="Momo Sakai"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-800">Momo Sakai</h3>
                      <p className="text-amber-700 font-medium">2nd Grade Teacher</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="pt-4">
                    <p className="text-stone-700 leading-relaxed">
                      Momo Sakai joins Wildcat Canyon Community School as a class teacher after taking a class from
                      grades 1-4 at Berkeley Rose Waldorf School. Momo received her BA from Occidental College in
                      Religious Studies, allowing her to study in Istanbul and in Rome. She grew up in the East Bay
                      speaking Japanese at home and learning to play the piano from her mother.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="jessica" className="bg-white rounded-lg border-0">
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex items-center gap-6 text-left">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/professional-headshot-dark-hair.png"
                        alt="Jessica Russell"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-800">Jessica Russell</h3>
                      <p className="text-amber-700 font-medium">3rd Grade Teacher</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="pt-4">
                    <p className="text-stone-700 leading-relaxed">
                      Jessica Russell was born and raised in California, growing up in between Shasta County and here in
                      the Bay Area. Jessica is a registered tribal member of the Cherokee Nation, and is passionate
                      about working with local indigenous communities. She attended Laney College before transferring to
                      Cal State East Bay, where she earned her BA in Psychology.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Faculty Values */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Faculty Statement of Core Values</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-lg text-stone-700 mb-6">
                We, the Faculty of Wildcat Canyon Community School, state the following to be our core values and
                guiding principles:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-amber-600 font-bold">01.</span>
                  <p className="text-stone-700">
                    We embrace an anti-racist and antibias, living pedagogy and curriculum, through the deeper study of
                    current values, past practices, and history.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-amber-600 font-bold">02.</span>
                  <p className="text-stone-700">
                    We dedicate ourselves to diversity, equity and inclusivity in our students, faculty, staff, and
                    greater community, with a commitment to self work in social, racial, and land justice.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-amber-600 font-bold">03.</span>
                  <p className="text-stone-700">
                    We are committed to the seven principles for Waldorf Schools and the Statement of Equity and Racial
                    Justice as outlined by AWSNA and the principles and mission of WECAN.
                  </p>
                </div>
                {/* Continue with remaining values... */}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-100">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Ready to Join Our Community?</h2>
            <p className="text-lg text-stone-700 mb-8">
              Learn more about our admissions process and schedule a visit to meet our incredible faculty.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              <Link href="/inquiry-form">Inquire Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
