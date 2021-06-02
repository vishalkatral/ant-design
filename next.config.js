const withLess = require('@zeit/next-less')

const config = withLess({
  javascriptEnabled: true
})

module.exports = {
  trailingSlash: true,
  ...config
}
