
Feature('CANON'/*, {retries: 1}*/);

Scenario('test login', (I) => {
  I.amOnPage('https://store.canon.ru/');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="nav-toggle"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/div/div/div[3]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="store.links"]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вход для клиентов');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это обязательное поле.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="email"]', "tolik_kosmal.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="pass"]', "feq0Z");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Введите действительный адрес');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="email"]', "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="pass"]', "feq0Z");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вы ввели неверные данные');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="email"]', "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="pass"]', "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="nav-toggle"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/div/div/div[3]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="store.links"]/ul/li[2]/div/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Личный кабинет');
  //I.saveScreenshot('CANON_account.png');

});
