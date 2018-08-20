
Feature('MID', {retries: 3});

Scenario('test search', (I) => {
  I.amOnPage('https://mideastore.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.fillField('//*[@id="search"]', 'пылес');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="search_mini_form"]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Результаты поиска');
  I.see('Пылесос Midea');

});
