const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    experimentalStudio: false,
    viewportHeight: 1920,
    viewportWidth: 1080,
    video: false,
    screenshotOnRunFailure: false,
    defaultCommandTimeout: 5000,
    screenshotOnRunFailure: true,
  },
});
