
Feature('CANON'/*, {retries: 1}*/);

Scenario('test order', (I) => {
  I.amOnPage('https://store.canon.ru/fotobumaga-plus-glossy-ii-pp-201-4h6-10h15-sm-50-listov.html');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="qty"]', ' ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="product-addtocart-button"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see("Введите, пожалуйста, действительно число в этом поле.");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="qty"]', '1');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="product-addtocart-button"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see("в Вашу корзину.");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="header-right"]/div[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="minicart-content-wrapper"]/div[2]/div[5]/div/a');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", ' ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[2]/button[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).see("Это обязательное поле.");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty mage-error']", '0');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[2]/button[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).see("Пожалуйста, введите число больше 0 в этом поле.");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty mage-error']", '0.1');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[2]/button[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).see("Самое меньшее, что вы можете купить, это 1.");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", '999');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[2]/button[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).see("нет в таком количестве на складе.");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", '9999');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[2]/button[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).see("Самое большее, что вы можете купить, это1000.");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[2]/button[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="discount-coupon-form"]/div/div[2]/div/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see("Это обязательное поле.");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="coupon_code"]', '9999');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="discount-coupon-form"]/div/div[2]/div/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see("Код купона");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", '1');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[2]/button[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="maincontent"]/div[4]/div/div[2]/div[1]/ul/li[1]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see("ОФОРМЛЕНИЕ ЗАКАЗА");
  //I.saveScreenshot('CANON_order.png');


});
