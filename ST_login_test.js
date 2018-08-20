
Feature('ST', /*{retries: 2}*/);

Scenario('test login', (I) => {
  I.amOnPage('https://freshub.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ЗВОНОК БЕСПЛАТНЫЙ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[3]/ul/li[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[3]/div[3]/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вход в систему');
  I.fillField("input[name='login[username]']", "tolik_kos@mail.ru");
  I.fillField("input[name='login[password]']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
});
