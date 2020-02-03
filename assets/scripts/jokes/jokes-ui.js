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
    const showJokesHtml = showJokesTemplate({ jokes: data.jokes })
    $('.content').show().html(showJokesHtml)
    $('#clear').show()
  }
  const updateJokeSuccess = (event, id) => {
      // a[data-item-id=stand-out]
    $(`.update-notice[data-id=${id}]`).show().text('Joke Updated. Click Show Jokes to view change.')
    $('.update-notice').delay(3000).hide('Joke Updated. Click Show Jokes to view change.')
    $('form').trigger('reset')
  }

  const updateJokeFailure = (event, id) => {
    $(`.update-notice[data-id=${id}]`).show().text('Update Failed. Check that joke belongs to user')
    $('.update-notice').delay(3000).hide('Update Failed. Check that joke belongs to user')
    $('form').trigger('reset')

  }
  const removeJokeSuccess = () => {
      $('#display').show().text('Joke Deleted')
      $('#display').delay(3000).hide('Joke Deleted')

  }

  const removeJokeFailure = (id) => {
    $(`.update-notice[data-id=${id}]`).show().text('Could not remove joke')  
    $('.update-notice').delay(3000).hide('Could not remove joke')
  }
 
  
  const failure = (error) => {
    console.error(error)
  }
module.exports = {
    createJokeSuccess,
    createJokeFailure,
    getJokesSuccess,
    failure,
    updateJokeSuccess,
    updateJokeFailure, 
    removeJokeSuccess,
    removeJokeFailure

}