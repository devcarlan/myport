import { ContactForm } from './shared/forms/contactform'

export const Contact = () => {
  return (
    <div className='container mx-auto md:max-w-5xl md:mt-24 md:pb-8'>
      <h3 className='text-2xl border-solid border-l-8 border-l-emerald-600 px-2'>
        Contact Me
      </h3>
      <ContactForm />
    </div>
  )
}
