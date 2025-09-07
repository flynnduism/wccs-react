import type React from "react"
import type { Metadata } from "next"
import { Inter, Lato } from "next/font/google"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DonationButton } from "@/components/donation-button"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Wildcat Canyon Community School - Waldorf Education PreK-8th",
  description:
    "Reimagining Waldorf education with inclusive, joyful learning experiences for students PreK-8th. Deep connections to indigenous land, seasons, self, and community.",
  generator: "Next.js",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${lato.variable}`}>
        <Navigation />
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
        {/* 
        Donation Button - Configured with WCCS Givebutter campaign:
        Account ID: KyxvSOSH1VudZKVc
        URL: https://givebutter.com/KyxvSOSH1VudZKVc
        Customize with props: position, customText, showPulse
        */}
        <DonationButton />
      </body>
    </html>
  )
}
