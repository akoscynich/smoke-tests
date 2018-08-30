
Feature('ELC', /*{retries: 2}*/);

Scenario('test registration', (I) => {
  I.amOnPage('https://www.elc-russia.ru/customer/account/login/');
  //pause();
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="agreement"]');
  I.wait(2);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[2]/input');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это поле обязательно для заполнения');
  I.fillField('//*[@id="firstname"]', 'Test');
  I.fillField('//*[@id="lastname"]', 'Account');
  I.fillField('//*[@id="email_address"]', 'tolik_kosmail.ru');
  I.fillField('//*[@id="password"]', 'f');
  I.fillField('//*[@id="confirmation"]', 'fe');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[2]/input');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Please');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста, введите');
});
