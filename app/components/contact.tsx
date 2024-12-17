'use client'
import Header from './ui/header'
import TextInput from './ui/text-input'
import TextArea from './ui/textarea'
import toast from 'react-hot-toast'
import { sendEmail } from '../functions/send-email'
import { FaPaperPlane } from 'react-icons/fa6'
import SubmitButton from './ui/submit-button'
import { useSectionInView } from '../lib/hooks'
import { motion } from 'framer-motion'

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.5)

  return (
    <section ref={ref} id="contact" className="scroll-mt-24">
      <Header animateOpacity className="text-center">
        E-mail
      </Header>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <p className="text-center lg:px-48 md:px-32 sm:px-12 text-lg text-gray-400">
          방문해주셔서 감사합니다! <br />
          포트폴리오에 관해 궁금한 점이 있으신 분께서는 <br />
          메일을 남겨주세요!
        </p>
        <form
          id="contact-form"
          className="lg:px-48 md:px-32 sm:px-12 mt-12"
          action={async (formData) => {
            const { error } = await sendEmail(formData)
            if (error) {
              toast.error(error)
            }
            const form = document.getElementById(
              'contact-form'
            ) as HTMLFormElement
            form.reset()
            toast.success('Message sent. Thanks for reaching out!')
          }}
        >
          <div className="grid grid-cols-2 gap-4 mb-6">
            <TextInput
              placeholder="이메일 주소"
              type="email"
              name="email"
              required
              max={100}
            />
            <TextInput
              placeholder="제목"
              name="subject"
              required
              min={3}
              max={200}
            />
          </div>
          <TextArea
            placeholder="내용"
            className="mb-4"
            name="message"
            required
            maxLength={5000}
          />
          <SubmitButton className="group">
            전송{' '}
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </SubmitButton>
        </form>
      </motion.div>
    </section>
  )
}
