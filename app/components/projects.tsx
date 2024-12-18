import Header from './ui/header'
import { projects } from '../lib/data'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'
import Project from './ui/project'
import { useSectionInView, useWindowSizeHook } from '../lib/hooks'
import { Fragment } from 'react'

export default function Projects() {
  const width = useWindowSizeHook()
  const { ref } = useSectionInView('Projects', width > 700 ? 0.4 : 0.15)

  const renderedProjects = projects.map((project) => {
    return (
      <Fragment key={project.name}>
        <li className="md:block hidden">
          <Project project={project} />
        </li>
        <li className="md:hidden block">
          <Project project={project} />
        </li>
      </Fragment>
    )
  })

  return (
    <section id="projects" className="scroll-mt-24" ref={ref}>
      <Header>Projects</Header>
      <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 md:auto-rows-fr">
        {renderedProjects}
        {projects.length % 2 !== 0 && (
          <div className="flex flex-col">
            <Link
              href={'https://github.com/limgunny?tab=repositories'}
              className="h-full bg-transparent border border-sjsu-gold font-extrabold text-lg text-sjsu-gold hover:text-white hover:bg-sjsu-gold transition-all rounded-lg md:flex hidden flex-col items-center justify-center"
            >
              <h2 className="flex items-center gap-1">
                프로젝트 더보기
                <FaGithub />
              </h2>
            </Link>
          </div>
        )}
      </ul>
    </section>
  )
}
