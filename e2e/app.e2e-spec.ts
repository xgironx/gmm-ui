import { HomePage } from './app.po';

describe('fema-bpm-demo App', function() {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display title Applications', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Applications');
  });
});
