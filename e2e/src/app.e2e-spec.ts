import { AppPage } from './app.po';
import { $ } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display results for Paris', () => {
    page.navigateTo();
    $('#test').click();
    $('#submit').click();
    expect($('.tab-title-container').isPresent()).toBe(true);
  });
});
