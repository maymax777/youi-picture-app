browser.setImplicitTimeout(30000);

describe('ReactTemplateProject', () => {
  describe(`${browser.capabilities.platformName}`, () => {
    
    // This group represents the tests for the screen.
    describe('Skipped Test Example', () => {
      context('when in App', () => {
        xit('skips this test', () => {});
      });
    });
  });
});
