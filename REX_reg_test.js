
Feature('REX', /*{retries: 2}*/);

Scenario('test registration', (I) => {
  I.amOnPage('https://elektroskandia.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="f_login"]/div[1]/a[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="reg"]/div/div[2]/input[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Не указаны все обязательные поля');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Неверно указан код с картинки');
});
