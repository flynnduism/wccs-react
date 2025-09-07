"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

// Navigation menu structure
const navigationMenu = [
  {
    title: "About WCCS",
    href: "/about",
    children: [
      { title: "At A Glance", href: "/about/at-a-glance" },
      { title: "Contact Us", href: "/contact" },
      { title: "Faculty & Staff", href: "/faculty" },
      { title: "Governance", href: "/about/governance" },
      { title: "Employment", href: "/about/employment" },
      { title: "Diversity", href: "/about/diversity" },
    ]
  },
  {
    title: "Curriculum",
    href: "/curriculum",
    children: [
      { title: "The Value of Our Education", href: "/curriculum/value-of-education" },
      { title: "Our Curriculum and Methods", href: "/curriculum/methods" },
      { title: "Early Childhood", href: "/early-childhood" },
      { title: "Lower School", href: "/lower-school" },
      { title: "Middle School", href: "/middle-school" },
      { title: "Special Subjects", href: "/curriculum/special-subjects" },
      { title: "Outside the Classroom", href: "/curriculum/outside-classroom" },
    ]
  },
  {
    title: "Programs",
    href: "/programs",
    children: [
      { title: "Break Camps", href: "/programs/break-camps" },
      { title: "After Care", href: "/programs/after-care" },
      { title: "Willow Homeschooling Program", href: "/programs/willow-homeschooling" },
      { title: "Sweet Pea Parent Child", href: "/sweet-pea" },
    ]
  },
  {
    title: "Admissions",
    href: "/admissions",
    children: [
      { title: "Welcome", href: "/admissions/welcome" },
      { title: "Inquire", href: "/inquiry-form" },
      { title: "Applying", href: "/application-form" },
      { title: "Affording", href: "/admissions/affording" },
      { title: "Visiting", href: "/visit" },
    ]
  },
  {
    title: "Community",
    href: "/community",
    children: [
      { title: "Calendar", href: "/community/calendar" },
      { title: "Community Workdays", href: "/community/workdays" },
      { title: "Festivals", href: "/community/festivals" },
      { title: "Community Life Circle", href: "/community/life-circle" },
      { title: "Parent Resources", href: "/community/parent-resources" },
      { title: "Covid Policy", href: "/community/covid-policy" },
    ]
  },
  {
    title: "Giving",
    href: "/giving",
    children: [
      { title: "Abundant Table Fund", href: "/giving/abundant-table-fund" },
    ]
  },
  {
    title: "Blog",
    href: "/blog",
    children: []
  }
]

export function Navigation() {
  const stickyWrapperRef = useRef<HTMLDivElement>(null)
  const navRowRef = useRef<HTMLDivElement>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (stickyWrapperRef.current && navRowRef.current) {
        if (window.scrollY > 0) {
          stickyWrapperRef.current.classList.add('is-sticky')
          navRowRef.current.classList.add('is-sticky')
        } else {
          stickyWrapperRef.current.classList.remove('is-sticky')
          navRowRef.current.classList.remove('is-sticky')
        }
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.dropdown-menu')) {
        setOpenDropdown(null)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div 
      ref={stickyWrapperRef}
      className="sticky-wrapper bg-white border-b border-gray-200 font-[var(--font-lato)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-6">
          {/* Logo - Centered */}
          <Link href="/" className="flex items-center" style={{ marginBottom: '1.5rem' }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wccs-logo-strapline-sm-3YErnLb2ESz5N8dXwwQCpZxFgxycPm.png"
              alt="Wildcat Canyon Community School"
              width={280}
              height={60}
              className="w-auto"
              style={{ height: '6.25rem' }}
            />
          </Link>

          {/* Navigation Menu - Centered Below Logo */}
          <div 
            ref={navRowRef}
            className="nav-row flex flex-wrap justify-center bg-white z-50"
          >
            {navigationMenu.map((item) => (
              <div key={item.title} className="dropdown-menu relative">
                {item.children.length > 0 ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                      className="text-[#36281c] hover:text-[#27646c] uppercase transition-colors flex items-center"
                      style={{ fontSize: '16px', letterSpacing: '1px', fontWeight: '400', padding: '0 15px' }}
                    >
                      {item.title}
                      <svg 
                        className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.title ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {openDropdown === item.title && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 text-sm text-[#36281c] hover:text-[#27646c] hover:bg-gray-50 transition-colors"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-[#36281c] hover:text-[#27646c] uppercase transition-colors"
                    style={{ fontSize: '16px', letterSpacing: '1px', fontWeight: '400', padding: '0 15px' }}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
