
Feature('ELC', {retries: 1});

Scenario('test search', (I) => {
  I.amOnPage('https://www.elc-russia.ru/');
  //pause();
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="search"]', 'lego');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="search_mini_form"]/div/button');

  I.retry({ retries: 10, minTimeout: 1000 }).see("Результаты поиска для 'lego'");
});
