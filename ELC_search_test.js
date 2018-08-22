
Feature('ELC', {retries: 1});

Scenario('test search', (I) => {
  I.amOnPage('https://www.elc-russia.ru/');
  //pause();
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="mm-0"]/div[2]/div[2]/a[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="search"]', 'lego');
  /*I.click('//*[@id="simple_search_submit"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Результаты по запросу «lego»');
  I.see('LEGO');*/
});
