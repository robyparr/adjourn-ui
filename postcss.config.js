module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('tailwindcss')('./tailwind.config.js'),
  ],
};
