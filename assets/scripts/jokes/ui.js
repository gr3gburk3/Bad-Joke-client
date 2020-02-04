const store = require('./../store.js')

const signUpSuccess = (response) => {
  $('form').trigger('reset')
  $('#message').show().text('Account Created!!')
  $('#message').delay(1000).hide('Account Created!!')
}

const signUpFailure = () => {
  $('#message').show().text('Oops, Sign-up failed')
  $('form').trigger('reset')
}

const signInSuccess = (response) => {
  store.user = response.user
  $('#message').show().text('Welcome!')
  $('#show-jokes').show()
  $('#sign-up').hide()
  $('#create-joke').show()
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('#change-password').show()
  $('#logout').show()
  $('#message').delay(2000).hide('Welcome!')
}

const signInFailure = () => {
  $('#message').show().text('Sign-in failed, check username and password and try again')
  $('form').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#message').show().text('Password Changed')
  $('form').trigger('reset')
  $('#message').delay(1000).hide('Password Changed')
}
const changePasswordFailure = () => {
  $('#message').show().text('Update Failed, try again')
  $('form').trigger('reset')
  $('#message').delay(1000).hide('Update Failed, try again')
}
const logoutSuccess = () => {
  $('#message').show().text('User Logged Out')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#logout').hide()
  $('#message').delay(1000).hide('User Logged Out')
  $('#create-joke').hide()
  $('#content').hide()
  $('#show-jokes').hide()
}
const logoutFailure = () => {
  $('#message').show().text('Unsuccessful Log-Out')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  logoutSuccess,
  logoutFailure
}
