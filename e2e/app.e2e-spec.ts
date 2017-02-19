import { NgTestProjectPage } from './app.po';

describe('ng-test-project App', () => {
  let page: NgTestProjectPage;

  beforeEach(() => {
    page = new NgTestProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
