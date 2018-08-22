
Feature('MID', {retries: 2});

Scenario('test links', (I) => {
  I.amOnPage('https://mideastore.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.click('li.authorization-link > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вход в систему');
  I.click('div.top-right.mobile-center > div > div > div > ul > li:nth-child(2) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Создать новую учётную запись клиента');
  I.click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Встраиваемая Бытовая Техника');
  I.click('nav > ul > li:nth-child(5) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Бесплатная доставка по всей России');
  I.click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('nav > ul > li:nth-child(6) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Поиск сервисного центра');
  I.click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('nav > ul > li:nth-child(7) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Midea – мировой производитель бытовой техники');
  I.click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('nav > ul > li:nth-child(8) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Midea в Российской Федерации');
  I.click('//*[@id="cms-static-main-footer"]/div[2]/div/span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="cms-static-main-footer"]/div[2]/div/div/ul[1]/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Midea – мировой производитель бытовой техники');
  I.click('//*[@id="cms-static-main-footer"]/div[2]/div/span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="cms-static-main-footer"]/div[2]/div/div/ul[1]/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Блог');
  I.click('//*[@id="cms-static-main-footer"]/div[2]/div/span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="cms-static-main-footer"]/div[2]/div/div/ul[1]/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Midea в Российской Федерации');
  I.click('//*[@id="cms-static-main-footer"]/div[3]/div/span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="cms-static-main-footer"]/div[3]/div/div/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Политика конфиденциальности');
  I.click('//*[@id="cms-static-main-footer"]/div[3]/div/span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="cms-static-main-footer"]/div[3]/div/div/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Договор оферты');
  /*I.click('//*[@id="cms-static-main-footer"]/div[3]/div/span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="cms-static-main-footer"]/div[3]/div/div/ul/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Поиск сервисного центра');
  I.click('//*[@id="cms-static-main-footer"]/div[3]/div/span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="cms-static-main-footer"]/div[3]/div/div/ul/li[4]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Бесплатная доставка по всей России');*/
});
