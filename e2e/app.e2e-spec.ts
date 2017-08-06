import { TheDogsBollocksPage } from './app.po';

describe('the-dogs-bollocks App', () => {
  let page: TheDogsBollocksPage;

  beforeEach(() => {
    page = new TheDogsBollocksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
