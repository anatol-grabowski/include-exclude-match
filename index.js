function match(value, include = [], exclude = []) {
  for (let reject of exclude) {
    if (reject.test(value)) {
      return false
    }
  }
  for (let accept of include) {
    if (accept.test(value)) {
      return true
    }
  }
  return false
}

module.exports = match
