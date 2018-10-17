
Feature('WF', /*{retries: 2}*/);

Scenario('test links', (I) => {
  I.amOnPage('https://ru.wileyfox.com/');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ПАРТНЁРЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_mobile"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_sm"]/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('СЛУЖБА ПОДДЕРЖКИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_mobile"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_sm"]/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ЧТО НАХОДИТСЯ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_mobile"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_sm"]/li[4]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Задать вопрос в техподдержку');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[5]/div/div[1]/div[2]/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ОБСЛУЖИВАНИЕ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[5]/div/div[1]/div[2]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('СЛУЖБА ПОДДЕРЖКИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[5]/div/div[1]/div[3]/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ЧТО НАХОДИТСЯ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[6]/div/div[1]/div[3]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КОНТАКТЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="top-menu"]/div[1]/div[3]/a/i');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ОЧИСТИТЬ ВСЮ ТАБЛИЦУ');
});
