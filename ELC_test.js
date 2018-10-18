
Feature('ELC', {retries: 1});

Scenario('test links', (I) => {
  I.amOnPage('https://www.elc-russia.ru/');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/elcru_toy_brand"]');
          //pause();
          I.retry({ retries: 5, minTimeout: 1000 }).see('Все бренды');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="https://www.elc-russia.ru/igrushki-dlya-malyshey.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Категории');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Игрушки для малышей<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="https://www.elc-russia.ru/tovary-dlya-malyshey.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Категории');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Товары для малышей<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="https://www.elc-russia.ru/igrushki-dlya-devochek.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Категории');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Игрушки для девочек<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="https://www.elc-russia.ru/igrushki-dlya-malchikov.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Категории');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Игрушки для мальчиков<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="https://www.elc-russia.ru/razvitie-hobbi-tvorchestvo.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Категории');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Развитие и творчество<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="https://www.elc-russia.ru/konstruktory.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Категории');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Конструкторы<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="https://www.elc-russia.ru/sport-i-aktivnost.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Категории');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Спорт и активность<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="https://www.elc-russia.ru/mir-geroev.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Категории');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Мир героев<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('img[class="sp-custom-83-1455402792347"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Акции<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/action10.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Новинки<');
          /*I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/action7.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Бестселлеры<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/elcru_toy_brand/elc"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>ELC<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/new-actions/lego.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Конструкторы LEGO<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/elc-birthday-club-terms"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Правила и Условия Клуба');*/
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/delivery"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Доставка и оплата');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/returns"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Возврат товара в интернет-магазин Elc-russia.ru');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/terms"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Публичная оферта');
          I.amOnPage('https://www.elc-russia.ru/');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/catalog/seo_sitemap/category/"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Интернет-магазин развивающих игрушек<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/privacy-policy"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Обработка персональных данных');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/disclamer"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Официальное уведомление');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="//www.elc-russia.ru/trackorder"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Отследить статус вашего заказа');
          /*I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/partnership"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Зарабатывайте вместе с партнерской программой ELC');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/blog/discont5"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Нашли в другом магазине товар дешевле?');*/
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/about-us"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('О компании ELC');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/careers"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Сделай карьеру в ELC');
          /*I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/corporate_clients"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Информация для корпоративных и оптовых покупателей');*/
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/pcorp"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Противодействие коррупции');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/articles"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Статьи о развитии ребенка');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/store-locator"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Адреса магазинов в');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/blog"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>ELC - блог для развития вашего ребёнка<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/contacts/"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Интернет-магазин развивающих игрушек<');
});

Scenario('test login', (I) => {
  I.amOnPage('https://www.elc-russia.ru/');
  //pause();
  I.retry({ retries: 5, minTimeout: 1000 }).click('//*[@id="top-links3"]/noindex/ul/li[1]/a');
  I.retry({ retries: 3, minTimeout: 1000 }).click('//*[@id="modal_auth"]/div/div[2]/div[2]/div/form/div[4]/div[1]/button');
  I.retry({ retries: 3, minTimeout: 1000 }).see('Я ваш постоянный покупатель');
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
  //I.retry({ retries: 3, minTimeout: 1000 }).see('Неправильный логин или пароль.');
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
  I.amOnPage('https://www.elc-russia.ru/customer/account/login/');
  //pause();
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="agreement"]');
  I.wait(2);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[2]/input');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это поле обязательно для заполнения');
  I.fillField('//*[@id="firstname"]', 'Test');
  I.fillField('//*[@id="lastname"]', 'Account');
  I.fillField('//*[@id="email_address"]', 'tolik_kosmail.ru');
  I.fillField('//*[@id="password"]', 'f');
  I.fillField('//*[@id="confirmation"]', 'fe');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div[2]/input');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Please');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста, введите');
});

Scenario('test search', (I) => {
  I.amOnPage('https://www.elc-russia.ru/');
  //pause();
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="search"]', 'lego');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="search_mini_form"]/div/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see("Результаты поиска для 'lego'");
});
