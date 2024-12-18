import { FaGithub, FaBookOpen, FaMusic, FaFilm } from 'react-icons/fa6'
import { PiTennisBallFill } from 'react-icons/pi'
import html from '@/public/html.png'
import css from '@/public/css.png'
import typescript from '@/public/typescript.png'
import next from '@/public/next.png'
import tailwind from '@/public/tailwind.png'
import mongodb from '@/public/mongo.png'
import javascript from '@/public/javascript.png'
import c from '@/public/c.png'
import java from '@/public/java.png'
import python from '@/public/python.png'
import daiso from '@/public/daiso.png'
import jbnara from '@/public/jbnara.png'
import nftdrop from '@/public/nft-drop.png'
import tokendrop from '@/public/token-drop.png'
import nftcollection from '@/public/nft-collection.png'
import jb from '@/public/jb.svg'
import military from '@/public/military.svg'
import information from '@/public/information.jpg'
import kisa from '@/public/kisa.jpg'
import cloudinary from '@/public/cloudinary.jpg'
import solidity from '@/public/solidity.svg'

export const links = [
  {
    hash: '#home',
    label: 'Home',
  },
  {
    hash: '#about',
    label: 'About',
  },
  {
    hash: '#skills',
    label: 'Skills',
  },
  {
    hash: '#projects',
    label: 'Projects',
  },
  {
    hash: '#experience',
    label: 'Experience',
  },
  {
    hash: '#contact',
    label: 'Contact',
  },
] as const

export const socials = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://www.github.com/limgunny',
  },
] as const

export const interests = [
  {
    name: '영화',
    icon: FaFilm,
  },
  {
    name: '음악',
    icon: FaMusic,
  },
  {
    name: '독서',
    icon: FaBookOpen,
  },
] as const

export const skills = [
  {
    name: 'JavaScript',
    image: javascript,
  },
  {
    name: 'TypeScript',
    image: typescript,
  },
  {
    name: 'Python',
    image: python,
  },
  {
    name: 'Java',
    image: java,
  },

  {
    name: 'C',
    image: c,
  },
  {
    name: 'HTML',
    image: html,
  },
  {
    name: 'CSS',
    image: css,
  },
  {
    name: 'MongoDB',
    image: mongodb,
  },
  {
    name: 'Next.js',
    image: next,
  },
  {
    name: 'Tailwind',
    image: tailwind,
  },
] as const

export const projects = [
  {
    name: '중부나라',
    image: jbnara,
    description:
      'Next JS, Typescript를 기반으로 만들어진 풀스택 프로젝트. 상품과 이미지에 대한 데이터베이스 등의 구축을 위하여 mongo DB와 Cloudinary DB를 사용  ',
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: next,
        alt: 'next',
      },
      {
        src: mongodb,
        alt: 'typescript',
      },
      {
        src: cloudinary,
        alt: 'next',
      },
    ],
    link: 'https://joongbunara.vercel.app/',
    code: 'https://github.com/limgunny/finalteam',
  },
  {
    name: '다이소 쇼핑몰',
    image: daiso,
    description:
      'Next JS, Typescript를 기반으로 만들어진 풀스택 프로젝트 DB는 vercel에서 제공하는PostgreSQL를 사용하였으며 Drizzle ORM을 통하여 DB를 관리',
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: next,
        alt: 'next',
      },
      {
        src: mongodb,
        alt: 'typescript',
      },
    ],
    link: 'https://daiso-shopping-2.vercel.app/',
    code: 'https://github.com/limgunny/daiso-shopping',
  },

  {
    name: 'NFT Drop',
    image: nftdrop,
    description:
      'solidity언어를 기반으로 제작하였으며 블록체인 기반 smart contract를 사용하였음, 그림·영상 등을 nft로 상품화하여 판매할 수 있도록 제작하여 sepholia 테스트 서버에 배포 ',
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: next,
        alt: 'next',
      },
      {
        src: tailwind,
        alt: 'tailwind',
      },
    ],
    link: 'https://nft-drop-beta-five.vercel.app/claim',
    code: 'https://github.com/limgunny/nft-drop',
  },
  {
    name: 'Token Drop',
    image: tokendrop,
    description:
      '직접 제작한 가상화폐 즉, 코인을 분배할 수 있는 smart contract 제작, sepholia 테스트 서버에 배포.',
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: next,
        alt: 'next',
      },
      {
        src: tailwind,
        alt: 'tailwind',
      },
    ],
    link: 'https://token-drop-zeta-six.vercel.app/',
    code: 'https://github.com/limgunny/token-drop',
  },
  {
    name: 'NFT Collection',
    image: nftcollection,
    description:
      'nft화한 다양한 디지털 자산들을 경매하고 나눠줄 수 있도록 smart contract 제작.',
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: next,
        alt: 'next',
      },
      {
        src: tailwind,
        alt: 'tailwind',
      },
    ],
    link: 'https://thirdweb.com/sepolia/0x754594E9e19D9Ca06A9fBBA7C1e230c2f203E372/nfts',
    code: 'https://github.com/limgunny/token-drop',
  },
]

export const experiences = [
  {
    title: '중부대학교 입학',
    subtitle: '전기전자공학과',
    image: jb,
    dates: '2018.02',
    description:
      '2018년 2월 중부대학교 고양캠퍼스 전기전자공학과로 입학 및 전기기능사 자격증 취득',
  },
  {
    title: '군 휴학',
    subtitle: '수방사 제 55경비단',
    image: military,
    dates: '2019.02.011 - 2020.9.16',
    description: '정보학교에서 후반기 교육을 받은 후 감시장비운용병으로 복무',
  },
  {
    title: '정보보호학과 전과',
    subtitle: '',
    image: information,
    dates: '2024.02 - 현재',
    description:
      '디지털공학 및 전자회로 등 실습과목들에 흥미를 느끼며 좋은 성적을 거뒀으나, 전기전자의 물리학적 공부에는 흥미를 느끼지 못함을 느꼈으며 이에 전과를 하게됨 ',
  },
  {
    title: '정보보안기사 필기 취득',
    subtitle: ' ',
    image: kisa,
    dates: ' 2025 (목표)',
    description:
      '2025년 정보보안기사 필기 합격을 목표로 공부할 예정이며, 추가적으로 다양한 부트캠프 방식의 교육기관을 탐색해 정보보호 분야에 대해서 더 공부할 예정 ',
  },
]

export const footerLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/limgunny',
  },
] as const
