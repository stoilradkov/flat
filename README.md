# flat

A small JavaScript utility that turns nested arrays into one flat array.

## Usage

```js
const flat = require('./flat')

flat([1, [2, [3]], 4]) // [1, 2, 3, 4]
```

## Tests

```bash
npm ci
npm test
```
