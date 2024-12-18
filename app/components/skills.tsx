import { skills } from '../lib/data'
import { useSectionInView } from '../lib/hooks'
import Header from './ui/header'
import IconCard from './ui/icon-card'

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.75)

  const renderedSkills = skills.map((skill) => {
    return (
      <li key={skill.name}>
        <IconCard {...skill} />
      </li>
    )
  })

  return (
    <section ref={ref} id="skills" className="scroll-mt-24">
      <Header>Technologies 💻</Header>
      <ul className="grid lg:grid-cols-10 md:grid-cols-5 grid-cols-4 gap-2">
        {renderedSkills}
      </ul>
    </section>
  )
}
