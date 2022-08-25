module.exports = {
  important: true,
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    '../pages/**/*.{js,ts,jsx,tsx}',
  ],
  media: false,
  corePlugins: {
    preflight: false,
  },
  mode: 'jit',
}
