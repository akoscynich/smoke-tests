
Feature('REX', /*{retries: 2}*/);

Scenario('test links', (I) => {/*
  I.amOnPage('https://elektroskandia.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Каталог');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="tm"]/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КАТЕГОРИИ ТОВАРОВ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="tm"]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Компания ООО «Электроскандия Рус» предлагает Вам');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="tm"]/ul/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ООО «Электроскандия Рус» придает особое значение');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="tm"]/ul/li[4]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="tm"]/ul/li[5]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ГОЛОВНОЙ ОФИС в г. Санкт-Петербруге');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="tm"]/ul/li[6]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Условия покупки');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="f_login"]/div[1]/a[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('E-Mail:');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="bm"]/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КАТЕГОРИИ ТОВАРОВ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="bm"]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Компания ООО «Электроскандия Рус» предлагает Вам');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="bm"]/ul/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ООО «Электроскандия Рус» придает особое значение');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="bm"]/ul/li[4]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="bm"]/ul/li[5]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ГОЛОВНОЙ ОФИС в г. Санкт-Петербруге');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="bm"]/ul/li[6]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Условия покупки');
});

Scenario('test registration', (I) => {
  I.amOnPage('https://elektroskandia.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="f_login"]/div[1]/a[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="reg"]/div/div[2]/input[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Не указаны все обязательные поля');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Неверно указан код с картинки');
});

Scenario('test search', (I) => {
  I.amOnPage('https://elektroskandia.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[id='name']", "втулка");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="f_catfilter"]/div/div[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Товаров в категории:');
});

Scenario('screenshots', (I) => {
I.amOnPage('https://elektroskandia.ru/');
I.saveScreenshot('REX_main.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/REX_main.png');
I.amOnPage('https://elektroskandia.ru/catalog/');
I.saveScreenshot('REX_catalog.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/REX_catalog.png');
I.amOnPage('https://elektroskandia.ru/s/8/o_kompanii.html');
I.saveScreenshot('REX_o_kompanii.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/REX_o_kompanii.png');
I.amOnPage('https://elektroskandia.ru/s/25/postawschiki.html');
I.saveScreenshot('REX_postawschiki.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/REX_postawschiki.png');
I.amOnPage('https://elektroskandia.ru/s/28/nashi_sertifikaty.html');
I.saveScreenshot('REX_sertifikaty.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/REX_sertifikaty.png');
I.amOnPage('https://elektroskandia.ru/s/13/');
I.saveScreenshot('REX_contacts.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/REX_contacts.png');
I.amOnPage('https://elektroskandia.ru/register/full/');
I.saveScreenshot('REX_registration.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/REX_registration.png');
I.amOnPage('https://elektroskandia.ru/remind/');
I.saveScreenshot('REX_remind.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/REX_remind.png');*/
});
