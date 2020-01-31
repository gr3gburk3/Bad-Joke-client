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

  const onUpdateJoke = (event) => {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    const id = $(event.target).data('id')
    console.log(id)
    jokesApi.updateJoke(data, id)
  }

  const onRemoveJoke = (event) => {
      console.log('test')
    event.preventDefault()
    const id = $(event.target).data('id')
    jokesApi.removeJoke(id)
      .then(() => onGetJokes(event))
      .catch(jokesUi.failure)
  }
  const addHandlers = () => {
    $('#create-joke').on('submit', onCreateJoke)
    $('#show-jokes').on('submit', onGetJokes)
    $('#content').on('click', '#remove', onRemoveJoke)
    $('#content').on('submit', '#update', onUpdateJoke)
  }
  module.exports = {
      addHandlers
  }