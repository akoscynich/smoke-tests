
Feature('VH', /*{retries: 2}*/);

Scenario('test search', (I) => {
  I.amOnPage('https://visagehall.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('БРЕНДЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a.search-box-toggle');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[id='search']", "мыло");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="search_mini_form"]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see("Результаты поиска для 'мыло'");
});
