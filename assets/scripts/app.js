'use strict'

const jokeEvents = require('./jokes/events.js')


$(() => {
  jokeEvents.addHandlers()
  $('#change-password').hide()
  $('#logout').hide()
})
