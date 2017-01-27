import { RoutesMusicPage } from './app.po';

describe('routes-music App', function() {
  let page: RoutesMusicPage;

  beforeEach(() => {
    page = new RoutesMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
