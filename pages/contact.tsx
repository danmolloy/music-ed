import ContactForm from '../components/contactForm'
import Layout from '../components/layout/layout'
import React from 'react'

export default function Contact() {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>We try to respond to all messages promptly.</p>
      <p>You can also reach out to us on <a className='text-blue-500 hover:underline hover:cursor-pointer' href="https://github.com/danmolloy">Github</a>.</p>
      <ContactForm />
    </Layout>
  )
}