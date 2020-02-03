const config = require('./../config')
const store = require('./../store.js')

const createJoke = function (data) {
    return $.ajax({
      url: config.apiUrl + '/jokes',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data: data 
    })
  }

const getJokes = function () {
  return $.ajax({
    url: config.apiUrl + '/jokes',
    method: 'GET',
  })
}

const removeJoke = function (id) {
    return $.ajax({
      url: config.apiUrl + '/jokes/' + id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
    })
  }

const updateJoke = function (data, id) {
    return $.ajax({
      url: config.apiUrl + '/jokes/' + id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data: data
    })
  
  }


module.exports = {
    createJoke,
    getJokes,
    updateJoke,
    removeJoke
}
