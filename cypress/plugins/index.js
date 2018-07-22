// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// eslint-disable-next-line no-unused-vars
const path = require("path")

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("before:browser:launch", (browser = {}, args) => {
    if (browser.name === "chrome") {
      process.cwd()
      const extensionPath = path.join(process.cwd(), "dist")
      console.log(extensionPath)
      args.push(`--load-extension=${extensionPath}`)
    }
  })
}
