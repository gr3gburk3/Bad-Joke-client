'use strict'

const jokeEvents = require('./jokes/joke-events.js')
const events = require('./jokes/events.js')


$(() => {
  events.addHandlers()
  jokeEvents.addHandlers()
  $('#change-password').hide()
  $('#logout').hide()
  $('#create-joke').hide()
  $('#show-jokes').hide()
  $('#clear').hide()
  $('#update-notice').show()
})
