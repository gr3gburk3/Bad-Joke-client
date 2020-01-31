const jokesApi = require('./jokes-api')
const getFormFields = require('./../../../lib/get-form-fields')
const jokesUi = require('./jokes-ui')

const onCreateJoke = function () {
    console.log('Im in onCreateJoke')
    event.preventDefault()
    const data = getFormFields(event.target)
    jokesApi.createJoke(data)
      .then(jokesUi.createJokeSuccess)
      .catch(jokesUi.createJokeFailure)
  }

  const onGetJokes = (event) => {
    event.preventDefault()
    jokesApi.getJokes()
      .then(jokesUi.getJokesSuccess)
      .catch(jokesUi.failure)
  }
  const addHandlers = () => {
    $('#create-joke').on('submit', onCreateJoke)
    $('#show-jokes').on('submit', onGetJokes)
  }
  module.exports = {
      addHandlers
  }