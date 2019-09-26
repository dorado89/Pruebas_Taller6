const cypress = require('cypress')

cypress.run({
  spec: './cypress/integration/vrt.js'
})
.then((results) => {
  console.log(results)
})
.catch((err) => {
  console.error(err)
})