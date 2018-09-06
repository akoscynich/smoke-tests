
Feature('VH', /*{retries: 2}*/);

Scenario('test registration', (I) => {
  I.amOnPage('https://visagehall.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('БРЕНДЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="#modal-auth"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ВОЙТИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('button.to-register-link');
  I.retry({ retries: 10, minTimeout: 1000 }).see('СОЗДАТЬ АККАУНТ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="create-form"]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='firstname']", "Тестовый");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='lastname']", "Аккаунт");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='email']", "tolik_kos");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="create-form"]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='firstname']", "Тестовый");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='lastname']", "Аккаунт");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='email']", "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='password']", "feq0ZI");
});
