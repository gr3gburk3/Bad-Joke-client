const config = require('./../config')
const store = require('./../store.js')

const createJoke = function (data) {
    return $.ajax({
      url: config.apiUrl + '/jokes',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data: data //{}
    })
  }

module.exports = {
    createJoke
}
