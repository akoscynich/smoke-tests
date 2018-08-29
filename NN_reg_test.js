
Feature('NN', /*{retries: 2}*/);

Scenario('test registration', (I) => {
  I.amOnPage('https://www.nespresso.com/ru/ru/customer/account/create/');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Кофе-капсулы');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[6]/div[2]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это обязательное поле');

});
