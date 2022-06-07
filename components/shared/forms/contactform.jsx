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
  return <div>Contact</div>
}
