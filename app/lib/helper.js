const { Success } = require('../../core/http-exception')

function success (message, errorCode) {
  throw new Success(message, errorCode)
}

module.exports = { success }
