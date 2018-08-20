
Feature('ST', /*{retries: 2}*/);

Scenario('test registration', (I) => {
  I.amOnPage('https://freshub.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ЗВОНОК БЕСПЛАТНЫЙ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[3]/ul/li[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[3]/div[3]/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вход в систему');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="maincontent"]/div[2]/div/div[4]/div[2]/div[2]/div/div/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Создать новую учётную запись клиента');
  I.fillField("input[name='firstname']", "Тестовый");
  I.fillField("input[name='lastname']", "Аккаунт");
  I.fillField("input[name='email']", "tolik_kos@mail.ru");
  I.fillField("input[name='password']", "feq0ZYIc");
  I.fillField("input[name='password_confirmation']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div/div[1]/button');
});
