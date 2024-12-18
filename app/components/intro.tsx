'use client'
import { socials } from '../lib/data'
import { useSectionInView } from '../lib/hooks'
import { RiDownloadLine } from 'react-icons/ri'
import Button from './ui/button'
import { TypeAnimation } from 'react-type-animation'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.75)

  const renderedSocials = socials.map(({ name, icon: Icon, href }) => {
    return (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-white/50 hover:text-sjsu-gold transition-all"
      >
        <Icon className="text-2xl" />
      </a>
    )
  })

  return (
    <section ref={ref} id="home" className="scroll-mt-24 mb-24">
      <div>
        <h1 className="md:text-2xl text-xl sm:mb-6 mb-3 font-light tracking-wider text-gray-400">
          Portfoilio<span className="wave">👋</span>
        </h1>
        <h1 className="md:text-7xl text-5xl font-bold sm:mb-4 mb-1 flex items-end">
          임건희{' '}
          <span className="flex items-center gap-2 ml-4 -translate-y-1.5">
            {renderedSocials}
          </span>
        </h1>
        <h2 className="lg:text-3xl text-2xl font-semibold text-white/50 mb-8">
          전북대학교 @{' '}
          <span className="text-sjsu-gold">
            {' '}
            <TypeAnimation
              sequence={['정보보호학과', 2000, '9184333', 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-2xl font-bold text-sjsu-gold"
            />
          </span>
        </h2>
      </div>
      <div className="text-gray-400 text-lg mb-8 lg:w-[50%] md:w-[65%]">
        전북대학교에서 정보보호를 전공하고 있으며,
        <br /> Next JS를 사용하여 다양한 풀스택 프로젝트들을
        <br /> 설계하고 구축한 경험이 있습니다.
      </div>
      <div>
        <Button href="/resume.pdf" className="md:text-lg group">
          Resume
          <RiDownloadLine className="transition-transform group-hover:translate-y-1" />
        </Button>
      </div>
    </section>
  )
}
