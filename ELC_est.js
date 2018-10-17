
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

Scenario('test login', (I) => {
  I.amOnPage('https://www.elc-russia.ru/customer/account/login/');
  I.retry({ retries: 3, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 3, minTimeout: 1000 }).see('Это поле обязательно для заполнения.');
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="email"]', 'tolik_kosmail.ru');
  I.retry({ retries: 3, minTimeout: 1000 }).fillField('//*[@id="pass"]', 'feq0Z');
  I.retry({ retries: 3, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 3, minTimeout: 1000 }).see('Пожалуйста, введите правильный адрес электронной почты. Например johndoe@domain.com.');
  I.retry({ retries: 3, minTimeout: 1000 }).see('Please enter 6 or more characters without leading or trailing spaces.');
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="email"]', 'tolik_kos@mail.ru');
  I.retry({ retries: 3, minTimeout: 1000 }).fillField('//*[@id="pass"]', 'feq0ZYI');
  I.retry({ retries: 3, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 3, minTimeout: 1000 }).see('Неправильный логин или пароль.');
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="email"]', 'tolik_kos@mail.ru');
  I.retry({ retries: 3, minTimeout: 1000 }).fillField('//*[@id="pass"]', 'feq0ZYIc');
  I.retry({ retries: 3, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 3, minTimeout: 1000 }).see('Мой аккаунт');
});

Scenario('test order', (I) => {
  I.amOnPage('https://www.elc-russia.ru/konstruktory/konstruktory-lego.html');
  /*I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="categoryProducts"]/div[1]/div[1]/div[4]');
  I.wait(2);
  I.amOnPage('https://www.elc-russia.ru/checkout/cart/index/');
  I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="https://www.elc-russia.ru/checkout/onepage/"]');
  I.retry({ retries: 5, minTimeout: 1000 }).click('//*[@id="checkout-billing-form"]/a');
  I.retry({ retries: 5, minTimeout: 1000 }).see('не заполнено');
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="checkout-billing-form"]/div/div[1]/div/input', '123')
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="checkout-billing-form"]/div/div[2]/div/input', '123')
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="checkout-billing-form"]/div/div[3]/div/input', '123')
  I.retry({ retries: 5, minTimeout: 1000 }).see('неверный номер телефона');
  I.retry({ retries: 5, minTimeout: 1000 }).see('неверная почта');
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="checkout-billing-form"]/div/div[2]/div/input', '1239999999');
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="checkout-billing-form"]/div/div[3]/div/input', '123@123.ru');
  I.retry({ retries: 5, minTimeout: 1000 }).click('//*[@id="checkout-billing-form"]/a');
  I.retry({ retries: 5, minTimeout: 1000 }).see('Курьер')*/
});

Scenario('test registration', (I) => {
  I.amOnPage('https://www.elc-russia.ru/');
  //pause();
  I.retry({ retries: 10, minTimeout: 1000 }).click('#mm-0 > div.header-top > div.header-top__line > a.account');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="modal_auth"]/div/div[2]/div[3]/div/div/button');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-register"]/div[5]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это поле обязательно для заполнения');
  I.fillField('//*[@id="firstname"]', 'Test');
  I.fillField('//*[@id="lastname"]', 'Account');
  I.fillField('//*[@id="email_address"]', 'tolik_kosmail.ru');
  I.fillField('//*[@id="password"]', 'f');
  I.fillField('//*[@id="confirmation"]', 'fe');
  I.click('//*[@id="terms-input"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-register"]/div[5]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Please');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста, введите');
});

Scenario('test search', (I) => {
  I.amOnPage('https://www.elc-russia.ru/');
  //pause();
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="mm-0"]/div[2]/div[2]/a[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="search"]', 'lego');
  /*I.click('//*[@id="simple_search_submit"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Результаты по запросу «lego»');
  I.see('LEGO');*/
});
