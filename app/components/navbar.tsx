'use client'
import { links } from '../lib/data'
import Link from 'next/link'
import { useActiveSectionContext } from '../context/section-context'
import { useEffect } from 'react'
import { useWindowSizeHook } from '../lib/hooks'

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  const width = useWindowSizeHook()

  useEffect(() => {
    const linksContainer = document.getElementById('links-container')
    const activeLink = document.getElementById(activeSection)
    if (linksContainer && activeLink && width < 700) {
      setTimeout(() => {
        linksContainer.scrollTo({
          left: activeLink.offsetLeft - linksContainer.offsetWidth / 2,
          behavior: 'smooth',
        })
      }, 750)
    }
  }, [activeSection, width])

  const renderedLinks = links.map(({ hash, label }) => {
    return (
      <li key={hash}>
        <Link
          href={hash}
          id={label}
          onClick={() => {
            setActiveSection(label)
            setTimeOfLastClick(Date.now())
          }}
          className={`rounded-full outline-none relative transition-all text-gray-400 font-medium px-4 py-1.5 flex ${
            activeSection == label
              ? 'text-white font-medium'
              : 'hover:bg-slate-700 hover:text-white'
          }`}
        >
          {label}
          {label === activeSection && (
            <span className="bg-sjsu-gold rounded-full absolute inset-0 -z-10"></span>
          )}
        </Link>
      </li>
    )
  })

  return (
    <nav className="md:rounded-full md:w-auto w-full max-w-full md:p-2 p-4 fixed md:top-6 top-0 left-1/2 outline-none transform -translate-x-1/2 sm:bg-slate-800/75 bg-slate-800/50 z-10 backdrop-blur-md">
      <ul
        id="links-container"
        className="flex overflow-x-auto scroll-hide items-center gap-2"
      >
        {renderedLinks}
      </ul>
    </nav>
  )
}
