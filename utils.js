const generateArrayWithDepth = (depth, ...values) => {
  const array = []
  let currentArray = array

  for (let i = 0; i < depth; i++) {
    currentArray.push([])
    currentArray = currentArray[0]
  }
  currentArray.push(values)

  return array
}

module.exports = generateArrayWithDepth
