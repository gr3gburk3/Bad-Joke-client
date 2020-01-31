// const store = require ('./../store.js')
const showJokesTemplate = require('../templates/joke-listing.handlebars')

const createJokeSuccess = () => {
    $('#display').show().text('Joke Created!')
    $('#display').delay(1500).hide('Joke Created!')
    $('form').trigger('reset')
}
const createJokeFailure = () => {
    $('#display').show().text('Could not create joke')
    $('form').trigger('reset')
  }

  const getJokesSuccess = (data) => {
      debugger
    console.log(data)
    const showJokesHtml = showJokesTemplate({ jokes: data.jokes })
    $('.content').html(showJokesHtml)
  }
module.exports = {
    createJokeSuccess,
    createJokeFailure,
    getJokesSuccess
}