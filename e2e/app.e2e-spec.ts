import { HospitalBasicoTemplatePage } from './app.po';

describe('HospitalBasico App', function() {
  let page: HospitalBasicoTemplatePage;

  beforeEach(() => {
    page = new HospitalBasicoTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
