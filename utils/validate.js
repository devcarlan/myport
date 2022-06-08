export function validate(values) {
  let errors = {}
  const regex =
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i

  if (!values.name) {
    errors.name = 'Your name is required.'
  }
  if (!values.email) {
    errors.email = 'Your email address is required.'
  } else if (!regex.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message) {
    errors.message = 'Please enter a message.'
  }
  return errors
}
