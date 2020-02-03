const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function () {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  }
  const onSignIn = function () {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
  }

  const onChangePassword = function () {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  }
  const onLogout = function () {
    event.preventDefault()
    api.logout()
      .then(ui.logoutSuccess)
      .catch(ui.logoutFailure)
  }
  const addHandlers = () => {
    $('#sign-up').on('submit', onSignUp)
    $('#sign-in').on('submit', onSignIn)
    $('#change-password').on('submit', onChangePassword)
    $('#logout').on('submit', onLogout)
  }

  module.exports = {
    addHandlers
  }
