"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef } from "react"

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveDropdown(menu)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // Small delay to allow moving to dropdown
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wccs-logo-strapline-sm-3YErnLb2ESz5N8dXwwQCpZxFgxycPm.png"
              alt="Wildcat Canyon Community School"
              width={280}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <div className="relative" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center text-gray-700 hover:text-gray-900 uppercase tracking-wide">
                About WCCS
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "about" && (
                <div
                  className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    About Our School
                  </Link>
                  <Link
                    href="/faculty"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Faculty & Staff
                  </Link>
                  <Link
                    href="/philosophy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Waldorf Philosophy
                  </Link>
                  <Link
                    href="/campus"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Our Campus
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("curriculum")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-gray-900 uppercase tracking-wide">
                Curriculum
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "curriculum" && (
                <div
                  className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link
                    href="/curriculum"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Overview
                  </Link>
                  <Link
                    href="/curriculum/early-childhood"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Early Childhood
                  </Link>
                  <Link
                    href="/curriculum/lower-school"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Lower School
                  </Link>
                  <Link
                    href="/curriculum/middle-school"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Middle School
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => handleMouseEnter("programs")} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center text-gray-700 hover:text-gray-900 uppercase tracking-wide">
                Programs
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "programs" && (
                <div
                  className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link
                    href="/programs"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    All Programs
                  </Link>
                  <Link
                    href="/sweet-pea"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Sweet Pea Parent-Child
                  </Link>
                  <Link
                    href="/early-childhood"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Early Childhood
                  </Link>
                  <Link
                    href="/lower-school"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Lower School
                  </Link>
                  <Link
                    href="/middle-school"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Middle School
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("admissions")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-gray-900 uppercase tracking-wide">
                Admissions
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "admissions" && (
                <div
                  className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link
                    href="/admissions"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Admissions Overview
                  </Link>
                  <Link
                    href="/visit"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Visit Our Campus
                  </Link>
                  <Link
                    href="/inquiry-form"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Inquiry Form
                  </Link>
                  <Link
                    href="/application-form"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Application Form
                  </Link>
                  <Link
                    href="/tuition"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Tuition & Fees
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("community")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-gray-900 uppercase tracking-wide">
                Community
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "community" && (
                <div
                  className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link
                    href="/community"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Community Overview
                  </Link>
                  <Link
                    href="/events"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Events & Calendar
                  </Link>
                  <Link
                    href="/newsletter"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Newsletter
                  </Link>
                  <Link
                    href="/parent-resources"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Parent Resources
                  </Link>
                </div>
              )}
            </div>

            <Link href="/giving" className="text-gray-700 hover:text-gray-900 uppercase tracking-wide">
              Giving
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 uppercase tracking-wide">
              Blog
            </Link>
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
