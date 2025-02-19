module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  printWidth: 100,
  overrides: [{
    files: "*.component.html",
    options: {
      parser: "angular"
    }
  },
  {
    files: "*.html",
    options: {
      parser: "html"
    }
  }]
};