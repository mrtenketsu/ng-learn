import { NewAppPage } from './app.po';

describe('new-app App', () => {
  let page: NewAppPage;

  beforeEach(() => {
    page = new NewAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
