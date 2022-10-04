const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    experimentalStudio: false,
    viewportHeight: 768,
    viewportWidth: 1440,
    video: false,
    screenshotOnRunFailure: false,
    defaultCommandTimeout: 5000,
    screenshotOnRunFailure: true,
  },
});
