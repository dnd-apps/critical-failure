module.exports = {
  future: {
    removeDeprecatedGapUtilities: true, 
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true   
  },
  purge: [
    './pages/**/*.html',
    './pages/**/*.vue',
    './pages/**/*.jsx',
    './components/**/*.html',
    './components/**/*.vue',
    './components/**/*.jsx',
  ],
}