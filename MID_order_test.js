
Feature('MID', {retries: 2});

Scenario('test order', (I) => {
  I.amOnPage('https://mideastore.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="store.menu"]/div/div/nav/ul/li[1]/a[1]');
  I.wait(8);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="maincontent"]/div[3]/div[1]/div[4]/ol/li[1]/div/div/div[3]/div[4]/div/div[2]/form/button');
  I.wait(8);
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.righ-header-content.col-lg-3.col-md-3.col-sm-3.col-xs-12 > div.minicart-wrapper > a.action.icon.icon-shopping-bag.showcart');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", "0");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста, введите в это поле число больше 0.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty mage-error']", "0.1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вы не можете приобрести меньше, чем 1.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", "0.1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вы не можете приобрести меньше, чем 1.');
  I.retry({ retries: 10, minTimeout: 1000 }).clearField("input[class='input-text qty']");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это поле обязательно для заполнения.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty mage-error']", "9999");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('У нас нет столько товара');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", "99999");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вы не можете приобрести больше, чем 10000.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", "1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).click('li:nth-child(1) > button');
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.checkout-payment-method.submit > div > div > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('No payment method selected');
});
