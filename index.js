var objectPropIsTrue = require('is-true')
var isNotTrue        = require('is-not-true')

module.exports = function (thing) {
  try {
    return !isNotTrue(thing)
  } catch {
    return objectPropIsTrue({ thing }, 'thing')
  }
}