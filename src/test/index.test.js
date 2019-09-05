import { expect } from "chai"
import sinon from "sinon"
var sw = require('selenium-webdriver');
var driver = new sw.Builder()
  .withCapabilities(sw.Capabilities.chrome())
  .build()

// And then...
var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(driver));

describe("Word watch functions", () => {
  describe("top word", () => {
    it("displays the top word and its word count", () => {
      driver.get('/');
      chai.expect('#site-container section.word-container').dom.to.contain.text("Top Word!");
    })
  })
})

// When the user comes to the page, they should see the top word and it's count on the right side of the page.
