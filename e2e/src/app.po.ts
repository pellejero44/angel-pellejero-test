import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  getTitleText() {
    return element(by.css('app-root .toolbar span')).getText();
  }

  getNumberOfImges(){
    return element.all(by.className('imgJSON')).count();
  }

  insertTextInTheInputFilter(str){
    element(by.css('app-root .content app-image-json input')).sendKeys(str);
  }
}
