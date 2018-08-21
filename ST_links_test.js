
Feature('ST', {retries: 1});

Scenario('test links', (I) => {
  I.amOnPage('https://freshub.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ЗВОНОК БЕСПЛАТНЫЙ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[1]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">Уход для тела');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[2]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">УХОД ДЛЯ ЛИЦА');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[3]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">УХОД ДЛЯ ВОЛОС');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[4]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">ДЛЯ МУЖЧИН');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[5]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">ДЛЯ ДОМА');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[6]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">АРОМАТЕРАПИЯ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ma-mobilemenu"]/li[7]/a/span');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('data-ui-id="page-title-wrapper">ПОДАРКИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[2]/div/div[2]/div/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/header/div[3]/ul/li[2]');

  //I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/footer/div/div[2]/div/div/div/div[1]');
  //footerTODO

});
