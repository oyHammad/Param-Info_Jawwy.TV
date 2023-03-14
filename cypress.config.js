const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      jawwyTv_SaudiArabia: 'https://subscribe.stctv.com/sa-en',
      jawwyTv_Kuwait: 'https://subscribe.stctv.com/kw-en',
      jawwyTv_Bahrain: 'https://subscribe.stctv.com/bh-en'
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    retries: {
      "runMode": 2,
      "openMode": 2
    },
    setupNodeEvents(on, config)
    {
      // implement node event listeners here
    },
  },
});
