
Feature('MET', /*{retries: 2}*/);

Scenario('test links', (I) => {
  I.amOnPage('https://metpromko.ru/');
  I.click('//*[@id="cities-popup"]/div/div/span');
  I.see('Оформить заказ');
  I.amOnPage('https://metpromko.ru/onepagecheckout/');
  I.see('КОРЗИНА ПУСТА');
  I.amOnPage('https://metpromko.ru/about/');
  I.see('О КОМПАНИИ');
  I.amOnPage('https://metpromko.ru/contacts/');
  I.see('Внимание! Компания Метпромко');
  I.amOnPage('https://metpromko.ru/dostavka/');
  I.see('Компания Метпромко доставляет');
  I.amOnPage('https://metpromko.ru/oplata/');
  I.seeInSource('"std">Оплата');
  I.amOnPage('https://metpromko.ru/uslugi/');
  I.see('Компания Метпромко является');
  I.click('//*[@id="menu-icon"]');
  I.see('Металлопрокат');
  I.see('Труба');
  I.see('Лист');
});

Scenario('test login', (I) => {
  I.amOnPage('https://metpromko.ru/');
  I.click('//*[@id="cities-popup"]/div/div/span');
  I.amOnPage('https://metpromko.ru/customer/account/login/');
  I.see('СТРАНИЦА АВТОРИЗАЦИИ');
  I.click('//*[@id="send2"]');
  I.see('Это поле обязательно для заполнения.');
  I.fillField("input[name='login[username]']", "tolik_kos@ail.ru");
  I.fillField("input[name='login[password]']", "feq");
  I.click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Please enter 6 or more characters without leading or trailing spaces.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='login[username]']", "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='login[password]']", "feq0ZYI");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Неверный адрес электронной почты (email) или пароль.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='login[username]']", "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='login[password]']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Выйти');
  I.see('Моя учётная запись');
  });
