import { Ng2fbBootstrapPage } from './app.po';

describe('ng2fb-bootstrap App', function() {
  let page: Ng2fbBootstrapPage;

  beforeEach(() => {
    page = new Ng2fbBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
