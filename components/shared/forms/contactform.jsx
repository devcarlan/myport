import { useState } from 'react'

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

    if (
      formValues.name &&
      formValues.email &&
      formValues.address &&
      formValues.city &&
      formValues.state &&
      formValues.zip &&
      formValues.message
    ) {
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
      <div className='bg-slate-300 mt-8 mx-auto rounded-md md:max-w-2xl'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-center items-center md:p-12'
        >
          <label className='mb-4'>
            Full Name
            <br />
            <input
              className='p-2 mt-2 focus:outline-emerald-700 rounded-md shadow-inner'
              type='text'
              name='name'
              value={formValues.name}
              onChange={handleChange}
            ></input>
            {formErrors.name ? <p>{formErrors.name}</p> : ''}
          </label>
          <label className='mb-4'>
            Company
            <br />
            <input
              type='text'
              name='company'
              value={formValues.company}
              onChange={handleChange}
            ></input>
            {formErrors.company ? <p>{formErrors.company}</p> : ''}
          </label>
          <label className='mb-4'>
            Email
            <br />
            <input
              type='email'
              name='email'
              value={formValues.email}
              onChange={handleChange}
            ></input>
            {formErrors.email ? <p>{formErrors.email}</p> : ''}
          </label>
          <label>
            Message
            <br />
            <textarea
              name='message'
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
          </label>
          {form.state === 'loading' ? (
            <div>
              <p className='text-md'>Sending message...</p>
            </div>
          ) : form.state === 'error' ? (
            <div>
              <p className='text-md'>{form.message}</p>
            </div>
          ) : form.state === 'success' ? (
            <div className={styles.altFormStatus}>
              <span style={{ marginRight: '10px', color: 'green' }}>
                <FaCheckCircle className={styles.formIcon} />
              </span>
              <p className='text-md'>Message sent successfully.</p>
            </div>
          ) : (
            <button>Send Message</button>
          )}
        </form>
      </div>
    </div>
  )
}
