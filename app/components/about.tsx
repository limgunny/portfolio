import Header from './ui/header'
import profilePic from '@/public/profile-pic.jpeg'
import { interests } from '../lib/data'
import Image from 'next/image'
import Link from 'next/link'
import IconCard from './ui/icon-card'
import { useSectionInView } from '../lib/hooks'
import { motion } from 'framer-motion'

export default function About() {
  const { ref } = useSectionInView('About', 0.5)

  const renderedInterests = interests.map((interest, i) => {
    return (
      <motion.li
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.05 + 0.5 }}
        viewport={{ once: true }}
        key={interest.name}
      >
        <IconCard {...interest} />
      </motion.li>
    )
  })

  return (
    <section id="about" ref={ref} className="scroll-mt-24">
      <Header>About 💭</Header>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-8">
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg"
        >
          안녕하세요 <br />
          중부대학교 정보보호학과에 재학 중인 임건희입니다.
          <br />
          <br />
          저는 현재 풀스택 개발자를 목표로 공부하고 있으며 <br />
          포트폴리오를 통해 지금까지 제작했던{' '}
          <Link
            href="/#projects"
            className="hover:text-sjsu-gold transition-colors font-semibold"
          >
            프로젝트들
          </Link>
          에 대해서
          <br /> 확인해 볼 수 있습니다.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="justify-center items-center p-4 lg:flex hidden"
        >
          <Image
            src={profilePic}
            alt="Alex Ross"
            className="rounded-xl shadow-xl shadow-slate-900 lg:h-72 h-56 w-auto brightness-90"
          />
        </motion.div>
      </div>
      <motion.h2
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold tracking-wider text-gray-400 mb-4"
      >
        Interests🏓
      </motion.h2>
      <ul className="grid lg:grid-cols-8 grid-cols-4 gap-2">
        {renderedInterests}
      </ul>
    </section>
  )
}
