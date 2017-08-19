import { Angular2ReduxAppPage } from './app.po';

describe('angular2-redux-app App', () => {
  let page: Angular2ReduxAppPage;

  beforeEach(() => {
    page = new Angular2ReduxAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
