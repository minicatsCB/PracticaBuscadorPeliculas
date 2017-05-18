import { MyFilmSearchPage } from './app.po';

describe('my-film-search App', function() {
  let page: MyFilmSearchPage;

  beforeEach(() => {
    page = new MyFilmSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
