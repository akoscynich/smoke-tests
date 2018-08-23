
Feature('ELC' /*{retries: 2}*/);

Scenario('test order', (I) => {
  I.amOnPage('https://www.elc-russia.ru/konstruktory/konstruktory-lego.html');

  /*I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="categoryProducts"]/div[1]/div[1]/div[4]');
  I.wait(2);
  I.amOnPage('https://www.elc-russia.ru/checkout/cart/index/');
  I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="https://www.elc-russia.ru/checkout/onepage/"]');
  I.retry({ retries: 5, minTimeout: 1000 }).click('//*[@id="checkout-billing-form"]/a');
  I.retry({ retries: 5, minTimeout: 1000 }).see('не заполнено');
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="checkout-billing-form"]/div/div[1]/div/input', '123')
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="checkout-billing-form"]/div/div[2]/div/input', '123')
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="checkout-billing-form"]/div/div[3]/div/input', '123')
  I.retry({ retries: 5, minTimeout: 1000 }).see('неверный номер телефона');
  I.retry({ retries: 5, minTimeout: 1000 }).see('неверная почта');
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="checkout-billing-form"]/div/div[2]/div/input', '1239999999');
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="checkout-billing-form"]/div/div[3]/div/input', '123@123.ru');
  I.retry({ retries: 5, minTimeout: 1000 }).click('//*[@id="checkout-billing-form"]/a');
  I.retry({ retries: 5, minTimeout: 1000 }).see('Курьер')*/

});
