module.exports = {
  'The Robot can finish the game and its score is shown on a final message' : function (browser) {
    browser
      .url('http://localhost:9000')
      .waitForElementVisible('body', 1000)
      .click('#new-button-robot')
      .pause(10000, function () {
        browser.getText('#score-text', function(result) {
          browser.globals.score = result.value;
        });
      })
      .perform(function(browser, done) {
        browser.assert.containsText('#current-word', browser.globals.score);
        done();
      })
      .end();
  }
};