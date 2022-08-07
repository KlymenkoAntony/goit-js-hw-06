const form = document.querySelector('form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(evt) {
  evt.preventDefault()
  const {
    elements: { email, password },
  } = evt.currentTarget

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!')
  }
  const userDetails = { email: email.value, Password: password.value }

  console.log(userDetails)
  evt.currentTarget.reset()
};
