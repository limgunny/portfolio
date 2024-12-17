import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  subject: string
  message: string
  email: string
}

export default function ContactFormEmail({
  subject,
  message,
  email,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>포트폴리오 문의 메일 도착!</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section className="p-4">
              <Heading className="leading-tight">
                포트폴리오 접속자의 문의 메일이 도착했습니다!
              </Heading>
              <Text>Subject - {subject}</Text>
              <Text>{message}</Text>
              <Hr />
              <Text>From - {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
