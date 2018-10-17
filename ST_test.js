
Feature('ST', {retries: 1});

Scenario('test links', (I) => {
  I.amOnPage('https://freshub.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ЗВОНОК БЕСПЛАТНЫЙ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.wait(1);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[1]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">Уход для тела');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.wait(1);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[2]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">УХОД ДЛЯ ЛИЦА');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.wait(1);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[3]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">УХОД ДЛЯ ВОЛОС');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.wait(1);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[4]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">ДЛЯ МУЖЧИН');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.wait(1);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[5]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">ДЛЯ ДОМА');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.wait(1);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[6]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">АРОМАТЕРАПИЯ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.wait(1);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[7]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">ПОДАРКИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[3]/ul/li[2]');
  //footerNOT_WORKS
});

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

Scenario('test search', (I) => {
  I.amOnPage('https://freshub.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ЗВОНОК БЕСПЛАТНЫЙ');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[id='search']", "мыло");
  I.retry({ retries: 10, minTimeout: 1000 }).click("//*[@id='search_mini_form']/div/div/button");
  I.retry({ retries: 10, minTimeout: 1000 }).see("Результаты поиска для: 'мыло'");
});
