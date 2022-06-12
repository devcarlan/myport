import { useState } from 'react'
import { validate } from '../../../utils/validate'

export const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    company: '',
    message: '',
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [form, setForm] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))

    if (formValues.name && formValues.email && formValues.message) {
      setForm({ state: 'loading' })
      try {
        const res = await fetch(`api/contactme`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValues),
        })

        const { error } = await res.json()

        if (error) {
          setForm({
            state: 'error',
            message: error,
          })
          return
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.',
        })
        setFormValues(initialValues)
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong.',
        })
      }
    }
  }
  return (
    <div>
      <div className='bg-gray-200 py-8 mt-8 mx-auto rounded-md md:max-w-2xl md:py-0'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-center items-center md:p-12'
        >
          <label className='mb-4'>
            Full Name
            <br />
            <input
              className='p-2 mt-2 border-none outline-none rounded-md shadow-md focus:shadow-emerald-500 focus:outline-emerald-500 focus:outline-[.1em] focus:outline-offset-0'
              type='text'
              name='name'
              value={formValues.name}
              onChange={handleChange}
            ></input>
            {formErrors.name ? (
              <p className='mt-2 text-sm text-red-700'>{formErrors.name}</p>
            ) : (
              ''
            )}
          </label>
          <label className='mb-4'>
            Company
            <br />
            <input
              className='p-2 mt-2 border-none outline-none rounded-md shadow-md focus:shadow-emerald-500 focus:outline-emerald-500 focus:outline-[.1em] focus:outline-offset-0'
              type='text'
              name='company'
              value={formValues.company}
              onChange={handleChange}
            ></input>
          </label>
          <label className='mb-4'>
            Email
            <br />
            <input
              className='p-2 mt-2 border-none outline-none rounded-md shadow-md focus:shadow-emerald-500 focus:outline-emerald-500 focus:outline-[.1em] focus:outline-offset-0'
              type='email'
              name='email'
              value={formValues.email}
              onChange={handleChange}
            ></input>
            {formErrors.email ? (
              <p className='mt-2 text-sm text-red-700'>{formErrors.email}</p>
            ) : (
              ''
            )}
          </label>
          <div className='w-3/4 mt-2 mb-8'>
            <label>
              Message
              <br />
              <textarea
                className='p-2 mt-2 w-full border-none outline-none rounded-md shadow-md focus:shadow-emerald-500 focus:outline-emerald-500 focus:outline-[.1em] focus:outline-offset-0'
                name='message'
                rows='6'
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message ? (
                <p className='mt-2 text-sm text-red-700'>
                  {formErrors.message}
                </p>
              ) : (
                ''
              )}
            </label>
          </div>

          {form.state === 'loading' ? (
            <div>
              <p className='text-md text-blue-600'>Sending message...</p>
            </div>
          ) : form.state === 'error' ? (
            <div>
              <p className='text-md'>{form.message}</p>
            </div>
          ) : form.state === 'success' ? (
            <div>
              <p className='text-md text-green-600'>
                Message sent successfully.
              </p>
            </div>
          ) : (
            <button
              type='submit'
              onClick={() => handleSubmit}
              className='group p-4  md:w-2/5 rounded-lg bg-emerald-500 bg-gradient-to-b hover:from-emerald-500 hover:to-emerald-700'
            >
              <span className='text-md text-white'>Send Message</span>
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
