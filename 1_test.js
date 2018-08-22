
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
