
Feature('VH', /*{retries: 2}*/);

Scenario('test login', (I) => {
  I.amOnPage('https://visagehall.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('БРЕНДЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="#modal-auth"]');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="login-form"]/input', "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="login-form"]/div[1]/input', "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="login-form"]/button[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).see("ЛИЧНЫЙ КАБИНЕТ");
  I.retry({ retries: 10, minTimeout: 1000 }).see('ПРОФИЛЬ');
  I.retry({ retries: 10, minTimeout: 1000 }).see('АДРЕСНАЯ КНИГА');
  I.retry({ retries: 10, minTimeout: 1000 }).see('МОИ ЗАКАЗЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КАРТЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ВЫЙТИ');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Личные данные');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="profile-tabs"]/ul/li[5]/a');
});
