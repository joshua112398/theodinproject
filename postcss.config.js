module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require("tailwindcss"),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2010'
      },
      stage: 3
    })
  ]
}
