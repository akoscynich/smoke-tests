
Feature('ELC', /*{retries: 2}*/);

Scenario('test registration', (I) => {
  I.amOnPage('https://www.elc-russia.ru/');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="mm-0"]/div[1]/div[2]/a[2]/i');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="modal_auth"]/div/div[2]/div[3]/div/div/button');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-register"]/div[5]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это поле обязательно для заполнения');
  I.fillField('//*[@id="firstname"]', 'Test');
  I.fillField('//*[@id="lastname"]', 'Account');
  I.fillField('//*[@id="email_address"]', 'tolik_kosmail.ru');
  I.fillField('//*[@id="password"]', 'f');
  I.fillField('//*[@id="confirmation"]', 'fe');
  I.click('//*[@id="terms-input"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-register"]/div[5]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Please');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста, введите');
});
