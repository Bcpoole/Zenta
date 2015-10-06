export class PageObject_Welcome {

  constructor() {

  }

  pressFileInput() {
    return element(by.css('input[type="file"]')).click();
  }
}
