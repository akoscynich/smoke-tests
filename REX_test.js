
Feature('REX', {retries: 1});

Scenario('test links', (I) => {
  I.amOnPage('https://elektroskandia.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Каталог');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="tm"]/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КАТЕГОРИИ ТОВАРОВ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="tm"]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Компания ООО «Электроскандия Рус» предлагает Вам');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="tm"]/ul/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ООО «Электроскандия Рус» придает особое значение');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="tm"]/ul/li[5]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ГОЛОВНОЙ ОФИС в г. Санкт-Петербруге');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="tm"]/ul/li[6]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Условия покупки');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="f_login"]/div[1]/a[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('E-Mail:');
//footer
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="bm"]/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КАТЕГОРИИ ТОВАРОВ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="bm"]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Компания ООО «Электроскандия Рус» предлагает Вам');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="bm"]/ul/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ООО «Электроскандия Рус» придает особое значение');
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
