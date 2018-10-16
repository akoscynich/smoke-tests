
Feature('CANON', {retries: 2});

Scenario('test registration', (I) => {
  I.amOnPage('https://store.canon.ru/');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="nav-toggle"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/div/div/div[3]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="store.links"]/ul/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Создать новый аккаунт');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="canon-agreement-checkbox"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="canon-fz-checkbox"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div/div[1]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это обязательное поле.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="firstname"]', "tolik_kosmal.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="lastname"]', "tolik_kosmal.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="email_address"]', "tolik_kosmal.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="password"]', "feq");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="password-confirmation"]', "fe");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="captcha_user_create"]', "tolik_kosmal.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div/div[1]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Введите действительный адрес ');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Минимальная длина');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Введите одно и тоже значение');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="firstname"]', "tolik_kosmal.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="lastname"]', "tolik_kosmal.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="email_address"]', "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="password"]', "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="password-confirmation"]', "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="captcha_user_create"]', "tolik_kosmal.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div/div[1]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вы уже зарегистрированы');
});
