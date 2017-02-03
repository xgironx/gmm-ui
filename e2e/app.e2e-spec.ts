import { FemaBpmDemoPage } from './app.po';

describe('fema-bpm-demo App', function() {
  let page: FemaBpmDemoPage;

  beforeEach(() => {
    page = new FemaBpmDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
