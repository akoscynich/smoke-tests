
Feature('NN', /*{retries: 2}*/);

Scenario('test links', (I) => {
  I.amOnPage('https://www.nespresso.com/ru/ru/');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Кофе-капсулы');
  I.click('//*[@id="header-nav-mobile"]/div[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Всего');
//pause();
  I.click('//*[@id="header-nav-mobile"]/div[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Кофемашина');
  I.click('//*[@id="header-nav-mobile"]/div[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Набор');
//  pause();
  I.click('//*[@id="header"]/div/div[1]/em');
  I.click('//*[@id="nav"]/ol/li[4]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ПОСТОЯНСТВО КАЧЕСТВА');
  I.click('//*[@id="nav"]/ol/li[5]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Что Nespresso может сделать для Вас?');
  //pause();
  I.click('//*[@id="header"]/div/div[1]/em');
  I.click('//*[@id="nav"]/ol/li[6]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Бутик');
  I.amOnPage('https://www.nespresso.com/ru/ru/');

  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="header"]/div/div[1]/em');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="nav"]/ol/li[7]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Исключительные');
  I.click('//*[@id="top"]/body/div[2]/div/div[3]/div/div[1]/div/ul/ul/li[1]/a');
  //I.retry({ retries: 10, minTimeout: 1000 }).see('Бутик');
  //I.amOnPage('https://www.nespresso.com/ru/ru/');

  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="top"]/body/div[2]/div/div[3]/div/div[1]/div/ul/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Свяжитесь');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="top"]/body/div[2]/div/div[3]/div/div[1]/div/ul/ul/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Курьерская');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="top"]/body/div[2]/div/div[3]/div/div[1]/div/ul/ul/li[4]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('УСЛОВИЯ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="top"]/body/div[2]/div/div[3]/div/div[1]/div/ul/ul/li[5]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ПРАВИЛА');
  /*I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="header"]/div/div[3]/div/div[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Мой личный кабинет');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="header-account"]/div/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти или зарегистрироваться');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="header"]/div/div[3]/div/div[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Мой личный кабинет');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="header-account"]/div/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Регистрация');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="header"]/div/div[3]/div/div[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Добавленный');*/
});
