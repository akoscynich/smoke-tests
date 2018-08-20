
Feature('VH', /*{retries: 2}*/);

Scenario('test registration', (I) => {
  I.amOnPage('https://visagehall.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('БРЕНДЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu-icon"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="megamenu"]/ul/li[1]/a[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="login-form"]/button[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='firstname']", "Тестовый");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='lastname']", "Аккаунт");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='email']", "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='password']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="create-form"]/button');
});
