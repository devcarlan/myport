import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { name, email, company, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: 'carlanhenry@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
      <p><strong>${name} </strong>${
        company ? `from <strong>${company}</strong>` : ''
      } has sent you a message.</p><br>
      <p><strong>Email: </strong> ${email}</p><br>
      <p><strong>Message: </strong> ${message}</p><br>`,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
  return res.status(200).json({ error: '' })
}
