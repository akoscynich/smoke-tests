
Feature('ST', /*{retries: 2}*/);

Scenario('test search', (I) => {
  I.amOnPage('https://freshub.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ЗВОНОК БЕСПЛАТНЫЙ');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[id='search']", "мыло");
  I.retry({ retries: 10, minTimeout: 1000 }).click("//*[@id='search_mini_form']/div/div/button");
  I.retry({ retries: 10, minTimeout: 1000 }).see("Результаты поиска для: 'мыло'");
});
