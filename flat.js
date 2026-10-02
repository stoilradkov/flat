const flat = (items) => {
  if (!Array.isArray(items)) {
    throw new Error('The argument should be an array')
  }

  const flatArray = []
  let stack = [...items]

  while (stack.length !== 0) {
    const item = stack[0]
    stack = stack.slice(1)

    if (!Array.isArray(item)) {
      flatArray.push(item)
    } else {
      stack = [...item, ...stack]
    }
  }

  return flatArray
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = flat
}

if (typeof window !== 'undefined') {
  window.flat = flat
}
