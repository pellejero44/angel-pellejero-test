import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display title as my name + test', () => {
    expect(page.getTitleText()).toEqual('A.Pellejero.Test');
  });

  it('should display total number of images = 4000', () => {
    expect(page.getNumberOfImges()).toEqual(4000);
  });

  it('should display input filter empty', () => {
    expect(page.getTextInTheInputFilter()).toBeUndefined();
  });

  it('should display total number of images is lower than 4000', () => {
    page.insertTextInTheInputFilter("120");
    expect(page.getNumberOfImges()).toBeLessThanOrEqual(4000);
  });

  it('should display total number of images equals to 0', () => {
    page.insertTextInTheInputFilter("-1");
    expect(page.getNumberOfImges()).toEqual(0);
  });

});
