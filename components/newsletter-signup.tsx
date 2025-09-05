import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Subscribe to our list</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <Input id="name" type="text" placeholder="Name" className="w-full" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <Input id="email" type="email" placeholder="Email Address *" className="w-full" required />
          </div>
          <Button type="submit" className="w-full bg-slate-600 hover:bg-slate-700 text-white">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
