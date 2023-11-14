const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalWebKitSupport : true,
  defaultCommandTimeout:400,
  //viewportHeight: 500,
  //viewportWidth: 500,
  //retries: {openMode: 2, runMode: 1}
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.suburbia.com.mx/',
    video: true,
    specPattern: "cypress/e2e/**/*.feature",
    excludeSpecPattern:['**/cypress/e2e/1-getting-started', '**/cypress/e2e/2-advanced-examples'],
  },

   
});

