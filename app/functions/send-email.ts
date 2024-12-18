'use server'
import React from 'react'
import { Resend } from 'resend'
import ContactFormEmail from '../components/contact-form-email'

const resend = new Resend('re_4c81ThRL_8mccaaozWmJqKfBMDwGCmhJT')
resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'red373712345@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
})

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string

  if (message.length > 5000) {
    return {
      error: 'Message is too long',
    }
  }

  let data
  try {
    data = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: 'red373712345`@gmail.com',
      subject: 'Portfolio Message',
      replyTo: email,
      react: React.createElement(ContactFormEmail, {
        subject: subject,
        message: message,
        email: email as string,
      }),
    })
  } catch (e: unknown) {
    return {
      error: 'Failed to send email',
    }
  }

  return {
    data,
  }
}
