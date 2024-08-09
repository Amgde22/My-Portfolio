import { Input, InputBase, Textarea, Button, Anchor } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThreeCircles, ThreeDots, Triangle } from 'react-loader-spinner';
import Socials from './Socials';
function ContactForm({close}) {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [message,setMessage] = useState()
  const [sending,setSending] = useState(false)
  const [sent,setSent] = useState(false)
  const [sentError,setSentError] = useState(null)


  
  const [t,i18n] = useTranslation("global")
  const direction = i18n.dir();
  
  const labelClass = `text-white font-bold mt-4 text-lg ${i18n.language == "ar"?"font1 font-semibold":"font-extrabold"}`
const header = t("contactForm.header")
const emailLabel = t("contactForm.labels.email")
const nameLabel = t("contactForm.labels.name")
const messageLabel = t("contactForm.labels.message")
const sendLabel = t("contactForm.labels.send")
const sendingLabel = t("contactForm.labels.sending")

const emailSuccess = t("contactForm.emailMessages.success")
const emailSuccessMessage = t("contactForm.emailMessages.successMessage")
const emailFail = t("contactForm.emailMessages.fail")
const emailFailMessage = t("contactForm.emailMessages.failMessage")

  return ( 
    <form onSubmit={sendEmailToAmgde} className={i18n.language == "ar"?"font1 font-semibold":"font-extrabold"} dir={direction}>
    <h1 className='black-text-shadow-title font-bold text-2xl' > 
      {header}
    </h1>

    <Socials />

    <InputBase
      id="name"
      label={nameLabel}
      labelProps={{className:labelClass}}
      withAsterisk={false}
      placeholder="Your name"
      required
      onChange={(e)=>{
        setName(e.target.value)
      }}

    />
    <InputBase
      id="email"
      labelProps={{className:labelClass}}
      label={emailLabel}
      placeholder="Your email"
      type="email"
      required
      withAsterisk={false}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}

    />
    <Textarea
      id="message"
      labelProps={{className:labelClass}}
      label={messageLabel}
      placeholder="Your message"
      autosize
      minRows={3}
      maxRows={10}
      required
      withAsterisk
      onChange={(e)=>{
        setMessage(e.target.value)
      }}
    />
    
    <Button disabled={sending}
    type="submit" 
    // onClick={sendEmailToAmgde} type="button" 
    
    className='bg-green-600  hover:bg-green-700 disabled:bg-green-900 transition-colors mt-2 mx-2' >
      <ThreeDots
        height="20"
        width="20"
        color="white"
        ariaLabel="triangle-loading"
        wrapperClassName=""
        visible={sending}
      />

      <span className={sending?"ml-2":""}>
        {sending?sendingLabel:sendLabel}
      </span> 
    </Button>

    <Button type="button" className='bg-red-700  hover:bg-red-800 transition-colors mt-2 ' 
    onClick={close}> X</Button>

    <Anchor
    className='text-white mt-4 opacity-75 hover:opacity-100 '
    href="mailto:magidembarek@gmail.com" display={"block"} target="_blank">
      magidembarek@gmail.com
    </Anchor>

{sent?
    <div className="email-sent  gap-1
    border-green-600 bg-green-200  rounded-2xl border-2 px-4 py-2 mt-2 
    text-green-600 text-2xl">

      <p className="flex items-center font-bold text-2xl">
        {emailSuccess}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      </p>
      
      <span className='text-xl'>
        {emailSuccessMessage}
      </span>

    </div>
 :null}

{sentError?
    <div className="email-sent gap-1
    border-red-600 bg-red-200  rounded-2xl border-2 px-4 py-2 mt-2 
    text-red-600">

      <p className="flex items-center font-bold text-2xl">
        {emailFail}
      </p>
        
      <p className="text-md">
      <Anchor
        className='text-red-600 font-bold underline opacity-90 hover:opacity-100 '
        href="mailto:magidembarek@gmail.com" target="_blank">
          magidembarek@gmail.com
      </Anchor>
      <p className="capitalize">
        {emailFailMessage}
      </p>
    </p>
  {sentError?
      <p className='font-sm text-lg underline mt-3'>
      {sentError}
      </p>
  :null}
    
    </div>
:null} 


  </form>
  

  
  );
  function sendEmailToAmgde(e) {
    e.preventDefault()
    setSending(true)
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "magidembarek@gmail.com",
      Password : "6FA1826A40648E182614CF1DCBA13EAE62C7",
      From : "magidembarek@gmail.com",
      To : "gourimagide@gmail.com",
      Subject : `Job offer from ${name}`,
      Body : `${message} from ${email}`,
    }
    
    ).then(()=>{
      setSending(false)
      setSent(true)
    })
    .catch(err=>{
      setSentError(err)
    })
  }
}

export default ContactForm;