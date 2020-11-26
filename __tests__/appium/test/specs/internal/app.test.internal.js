// https://www.chaijs.com/
import { expect } from 'chai';  // Using Expect style.
import AppScreen from '../../pageobjects/app.page'
import allure from '@wdio/allure-reporter'

browser.setImplicitTimeout(30000);

describe('ReactTemplateProject', () => {
  describe(`${browser.capabilities.platformName}`, () => {
    // This group represents the tests for the screen.
    describe('App Tests', () => {
      context('when in App', () => {
        it('displays logo image', () => {
          // https://webdriver.io/docs/allure-reporter.html#supported-allure-api
          allure.addFeature('App Tests');
          allure.addEnvironment('Platform', browser.capabilities.platformName);
          allure.addSeverity('Minor');
          // Wait until the screen is loaded and displayed.
          expect(AppScreen.react_image_node.getAttribute("isdisplayed")).to.be.true;
        });
      });
    });
  });
});
