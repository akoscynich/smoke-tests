
Feature('CANON', {retries: 1});

Scenario('test links', (I) => {
  I.amOnPage('https://store.canon.ru/');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Больше новостей и акций');
  //I.saveScreenshot('CANON_main.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="nav-toggle"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ФОТОАППАРАТЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ui-id-3"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Новинки');
  //I.saveScreenshot('CANON_menu.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="ui-id-11"]');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('"page-title-wrapper">Новинки');
  //I.saveScreenshot('CANON_catalog.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="nav-toggle"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/div/div/div[3]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="store.links"]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вход для клиентов');
  //I.saveScreenshot('CANON_login.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="maincontent"]/div[4]/div/div[2]/div[2]/div[2]/div/div/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Создать новый аккаунт');
  //I.saveScreenshot('CANON_registration.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="header-right"]/div[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('У Вас нет товаров в корзине.');
  //I.saveScreenshot('CANON_emptyCart.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/footer/div/div[2]/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Компания Canon - мировой лидер');
  //I.saveScreenshot('CANON_about.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/footer/div/div[2]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Выбрать товар в интернет-магазине ');
  //I.saveScreenshot('CANON_kak-kupit.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/footer/div/div[2]/ul/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Основные понятия');
  //I.saveScreenshot('CANON_soglashenie.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/footer/div/div[2]/ul/li[4]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Настоящая Политика');
  //I.saveScreenshot('CANON_politika.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/footer/div/div[2]/ul/li[5]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Изготовитель предоставляет');
  //I.saveScreenshot('CANON_pravila.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/footer/div/div[2]/ul/li[6]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Интернет-магазин');
  //I.saveScreenshot('CANON_questions.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/footer/div/div[2]/ul/li[7]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Уважаемые покупатели,');
  //I.saveScreenshot('CANON_dostavka.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/footer/div/div[2]/ul/li[8]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Возврат товара надлежащего качества');
  //I.saveScreenshot('CANON_vozvrat.png');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[1]/footer/div/div[2]/ul/li[9]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('АДРЕС ОФИСА');
  //I.saveScreenshot('CANON_kontakty.png');
});
