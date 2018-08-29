
Feature('NN', /*{retries: 2}*/);

Scenario('test order', (I) => {
  I.amOnPage('https://www.nespresso.com/ru/ru/');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Кофе-капсулы');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="header-nav-mobile"]/div[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Всего');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="add-to-cart-782"]/div/div/button/i[2]');
  I.wait(1);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="add-to-cart-782"]/div/div/div/div[1]/table/tbody/tr[2]/td[5]');
  I.wait(5);
  I.amOnPage('https://www.nespresso.com/ru/ru/checkout/cart/');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="shopping-cart-table"]/tbody/tr[3]/td[4]/input', '1')
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="shopping-cart-table"]/tbody/tr[3]/td[4]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('The minimum quantity allowed for purchase is 10.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="shopping-cart-table"]/tbody/tr[3]/td[4]/input', '99999')
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="shopping-cart-table"]/tbody/tr[3]/td[4]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('The maximum quantity allowed for purchase is 1500.');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Некоторые товары не могут быть заказаны в указанном количестве.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="shopping-cart-table"]/tbody/tr[3]/td[4]/input', '10')
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="shopping-cart-table"]/tbody/tr[3]/td[4]/button');
  I.wait(5);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="top"]/body/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li[2]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Количество капсул в заказе должно быть кратно 50');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="shopping-cart-table"]/tbody/tr[3]/td[4]/input', '100')
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="shopping-cart-table"]/tbody/tr[3]/td[4]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="top"]/body/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li[2]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Я НОВЫЙ КЛИЕНТ');
  /*I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="login-email"]', 'tolik_kos@mail.ru')
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="login-password"]', 'acid1985')
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="checkout-step-login"]/div/div[2]/div/button');

*/
});
