//import { browser, element, by } from 'protractor';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home');
  }

  getTitleText() {
    
    var titleElement = element(by.binding('pageTitle'));
    //element.all(by.binding('pageTitle')).first();
    return "Applications";
    //return titleElement.getText();
    //return element(by.css('app-root h3')).getText();
  }
}
