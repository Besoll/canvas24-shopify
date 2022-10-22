// module.exports = {
//   plugins: [
//     "postcss-nesting",
//     "tailwindcss",
//     "autoprefixer"
//   ]
// }

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  }
}

//just for me to check for now!
// module.exports = {
//   plugins: [
//     require("tailwindcss"),
//     require("autoprefixer")
//   ]
// }