
Feature('ALL', /*{retries: 2}*/);

Scenario('screenshots', (I) => {
  I.amOnPage('https://metpromko.ru/');
  I.click('//*[@id="cities-popup"]/div/div/span');
  I.wait(1);
  I.saveScreenshot('MET_main.png');
  I.amOnPage('https://metpromko.ru/checkout/cart/');
  I.saveScreenshot('MET_checkout.png');
  I.amOnPage('https://metpromko.ru/contacts');
  I.saveScreenshot('MET_contacts.png');
  I.amOnPage('https://metpromko.ru/about/');
  I.saveScreenshot('MET_about.png');
  I.amOnPage('https://metpromko.ru/dostavka/');
  I.saveScreenshot('MET_dostavka.png');
  I.amOnPage('https://metpromko.ru/oplata/');
  I.saveScreenshot('MET_oplata.png');
  I.amOnPage('https://metpromko.ru/uslugi/');
  I.saveScreenshot('MET_uslugi.png');
  I.amOnPage('https://metpromko.ru/customer/account/login/');
  I.saveScreenshot('MET_login.png');
  I.click('//*[@id="login-form"]/div/div/div[2]/div/div/div/button');
  I.wait(1);
  I.saveScreenshot('MET_registration.png');
  I.amOnPage('https://metpromko.ru/metalloprokat');
  I.wait(4);
  I.saveScreenshot('MET_catalog.png');

  });
