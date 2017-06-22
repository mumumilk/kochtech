import { KochtechPage } from './app.po';

describe('kochtech App', () => {
  let page: KochtechPage;

  beforeEach(() => {
    page = new KochtechPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
