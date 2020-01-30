// const store = require ('./../store.js')

const createJokeSuccess = () => {
    $('#display').show().text('Joke Created!')
    $('#display').delay(1500).hide('Joke Created!')
    $('form').trigger('reset')
}
const createJokeFailure = () => {
    $('#display').show().text('Could not create joke')
    $('form').trigger('reset')
  }

module.exports = {
    createJokeSuccess,
    createJokeFailure
}