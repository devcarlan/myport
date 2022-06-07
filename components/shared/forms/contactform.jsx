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
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <br />
          <input
            className='active:border-emerald-700'
            type='text'
            name='name'
            value={formValues.name}
            onChange={handleChange}
          ></input>
          {formErrors.name ? <p>{formErrors.name}</p> : ''}
        </label>
        <label>
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
          Address
          <br />
          <input
            type='text'
            name='address'
            value={formValues.address}
            onChange={handleChange}
          ></input>
          {formErrors.address ? <p>{formErrors.address}</p> : ''}
        </label>
        <label>
          City
          <br />
          <input
            type='text'
            name='city'
            value={formValues.city}
            onChange={handleChange}
          ></input>
          {formErrors.city ? <p>{formErrors.city}</p> : ''}
        </label>
        <label>
          State
          <br />
          <input
            type='text'
            name='state'
            value={formValues.state}
            onChange={handleChange}
          ></input>
          {formErrors.state ? <p>{formErrors.state}</p> : ''}
        </label>
        <label>
          Zip
          <br />
          <input
            type='text'
            name='zip'
            value={formValues.zip}
            onChange={handleChange}
          ></input>
          {formErrors.zip ? <p>{formErrors.zip}</p> : ''}
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
  )
}
