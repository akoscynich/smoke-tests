
Feature('CANON'/*, {retries: 1}*/);

Scenario('test search', (I) => {
  I.amOnPage('https://store.canon.ru/');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="popup-search-button"]/div');
  I.fillField('//*[@id="search"]', 'фото');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="search_mini_form"]/div[2]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see("Результаты поиска для: 'фото'");
  //I.saveScreenshot('CANON_search_results.png');

});
