function factory () {
  var prefix = '@@symbol.for:'
  var length = prefix.length

  var fake = key => `@@symbol:${key}`

  fake.for = key => prefix + key

  fake.keyFor = function (sym) {
    return typeof sym === 'string'
      && sym.indexOf(prefix) === 0
        ? sym.slice(length)
        : undefined
  }
}

module.exports = typeof Symbol === 'function'
  ? Symbol
  : factory()
