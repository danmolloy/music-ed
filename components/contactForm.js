import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export default function ContactForm() {
  const [sendStatus, setSendStatus] = useState(null)
  const [recieved, setRecieved] = useState(false)

  const sendFail = (<div><p className="text-lg">Message failed to send.</p> <p>Please try again or <a href='mailto:danmolloy91@gmail.com' className='text-blue-500'>send an email</a>.</p></div>)

  const sendSuccess = (<div><p className="text-lg">Message recieved!</p><p>We will get back to you as soon as possible.</p></div>)

  const sendingMsg = (<div><p className="text-lg">Message sending...</p></div>)


  return (
    <Formik    
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required')
    })}
    onSubmit={async (values, actions ) => {
      console.log('Sending')
      setSendStatus(sendingMsg)
      await new Promise(resolve => setTimeout(resolve, 1000))
        
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then((res) => {
        console.log('Response received')

        if (res.status === 200) {
          setSendStatus(sendSuccess)
          setRecieved(true)
          actions.setSubmitting(false)
          actions.resetForm()
        } else {
          setSendStatus(sendFail)
        }
        })
      }}> 
    
      <Form className="contact-form">
          <label htmlFor='name-input' >Name</label>
          <Field 
            id="name-input" 
            className="form-input"
            type="text"
            name="name"/>
          <ErrorMessage name="name">
            { msg => <div className="form-error">{msg}</div> }
          </ErrorMessage>

          <label htmlFor='email-input' >Email</label>
          <Field
            id="email" 
            className="form-input" 
            type="email"
            name="email"/>
          <ErrorMessage name="email">
          { msg => <div className="form-error">{msg}</div> }
          </ErrorMessage>

          <label htmlFor='msg-text' >Message</label>
          <Field 
            id="msg-text" 
            className="form-text" 
            type="text"
            name="message"/>
          <ErrorMessage name="message" >
            { msg => <div className="form-error">{msg}</div> }
          </ErrorMessage>
        <button id="submit-button" type='submit' className="submit-btn">Submit</button>
        <div className='mt-2'>
          <p>{sendStatus}</p>
        
      </div>
      </Form> 
    </Formik>
  )
}