
Feature('MET', /*{retries: 2}*/);

Scenario('test registration', (I) => {
  I.amOnPage('https://metpromko.ru/');
  I.click('//*[@id="cities-popup"]/div/div/span');

  I.amOnPage('https://metpromko.ru/customer/account/login/');
  I.see('СТРАНИЦА АВТОРИЗАЦИИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="login-form"]/div/div/div[2]/div/div/div/button');
  I.wait(2);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="header-account"]/div[2]/div/div/div[4]/div/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('First name is required!');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Last name is required!');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Email address is required!');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Password is required!');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Terms and Conditions are required!');

  });
