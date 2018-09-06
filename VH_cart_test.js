
Feature('VH', /*{retries: 2}*/);

Scenario('test cart', (I) => {
  I.amOnPage('https://visagehall.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('БРЕНДЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a.search-box-toggle');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[id='search']", "Скраб для тела Малиновые Сливки 250мл");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="search_mini_form"]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Результаты поиска для');
  I.retry({ retries: 10, minTimeout: 1000 }).click('button.product-cart');
  I.retry({ retries: 10, minTimeout: 1000 }).amOnPage('https://visagehall.ru/checkout/cart/');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('input[class="numeric input-text qty"]', '9999');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Запрашиваемое количество для товара');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('input[class="numeric input-text qty"]', '999999');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Максимальное количество, разрешённое для приобретения: 10000.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('input[class="numeric input-text qty"]', '0');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Ваша корзина пуста.');
});
