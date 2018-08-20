
Feature('VH', /*{retries: 2}*/);

Scenario('test wishlist', (I) => {
  I.amOnPage('https://visagehall.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('БРЕНДЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a.search-box-toggle');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[id='search']", "Скраб для тела Малиновые Сливки 250мл");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="search_mini_form"]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a.link-wishlist');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu-icon"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="megamenu"]/ul/li[1]/a[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ИЗБРАННОЕ');

});
