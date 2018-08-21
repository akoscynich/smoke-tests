
Feature('ELC', {retries: 1});

Scenario('test links', (I) => {
  I.amOnPage('https://www.elc-russia.ru/');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="page"]/div/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Бренды');
  I.see('Вступить в клуб');
  I.see('Задать вопрос');
  I.see('Войти');
  I.see('Регистрация');
  I.see('Новинки');
  I.see('Магазины');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu"]/div[2]/a[3]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="titleOpenReview"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/delivery"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Доставка осуществляется по территории России.');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="titleOpenReview"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/returns"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Возврат товара в интернет-магазин Elc-russia.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="titleOpenReview"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/terms"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Публичная оферта');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="titleOpenReview"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/catalog/seo_sitemap/category/"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Карта сайта');
  //I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="titleOpenReview"]');
  //I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/customer/account/login/"]');
  //I.retry({ retries: 10, minTimeout: 1000 }).see('Зайти через учетную запись OpenID');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="titleOpenReview"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/privacy-policy"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Обработка персональных данных');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="titleOpenReview"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/disclamer"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Официальное уведомление');
});
