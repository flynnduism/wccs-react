import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Wildcat Canyon Community School - Waldorf Education PreK-8th",
  description:
    "Reimagining Waldorf education with inclusive, joyful learning experiences for students PreK-8th. Deep connections to indigenous land, seasons, self, and community.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Navigation />
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  )
}
