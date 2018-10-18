
Feature('MID');

Scenario('test compare', (I) => {
  I.amOnPage('https://mideastore.ru');
  /*I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="store.menu"]/div/div/nav/ul/li[1]/a[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="maincontent"]/div[3]/div[1]/div[4]/ol/li[1]/div/div/div[2]/a/span/span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.Product__Actions--Bookmark > div > div > a.action.tocompare');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вы добавили товар');*/
});

Scenario('test links', (I) => {
  I.amOnPage('https://mideastore.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.click('li.authorization-link > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вход в систему');
  I.click('div.top-right.mobile-center > div > div > div > ul > li:nth-child(2) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Создать новую учётную запись клиента');
  I.click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Встраиваемая Бытовая Техника');
  I.click('nav > ul > li:nth-child(6) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Бесплатная доставка по всей России');
  I.click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('nav > ul > li:nth-child(7) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Поиск сервисного центра');
  I.click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('nav > ul > li:nth-child(8) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Midea – мировой производитель бытовой техники');
  I.click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('nav > ul > li:nth-child(9) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Midea в Российской Федерации');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/about-us/"]');
        I.retry({ retries: 10, minTimeout: 1000 }).see('Midea – мировой производитель бытовой техники');
        I.retry({ retries: 10, minTimeout: 1000 }).see('О Midea');
        I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/blog/"]');
        I.retry({ retries: 10, minTimeout: 1000 }).see('Последние новости');
        I.retry({ retries: 10, minTimeout: 1000 }).see('Блог');
        I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/contacts/"]');
        I.retry({ retries: 10, minTimeout: 1000 }).see('Midea в Российской Федерации');
        I.retry({ retries: 10, minTimeout: 1000 }).see('ООО "МИДЕА ОНЛАЙН"');
        I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/privacy-policy/"]');
        I.retry({ retries: 10, minTimeout: 1000 }).see('Политика конфиденциальности');
        I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/price1/"]');
        I.retry({ retries: 10, minTimeout: 1000 }).see('Договор оферты');
        I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/stockists/"]');
        I.retry({ retries: 10, minTimeout: 1000 }).see('Поиск сервисного центра');
        I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/payment/"]');
        I.retry({ retries: 10, minTimeout: 1000 }).see('Бесплатная доставка по всей России');
        I.retry({ retries: 10, minTimeout: 1000 }).see('Midea в России');
});

Scenario('test order', (I) => {
  I.amOnPage('https://mideastore.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="store.menu"]/div/div/nav/ul/li[1]/a[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="maincontent"]/div[3]/div[1]/div[4]/ol/li[1]/div/div/h2/a');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="newsletter"]', "1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="product-addtocart-button"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.righ-header-content.col-lg-3.col-md-3.col-sm-3.col-xs-12 > div.minicart-wrapper > a.action.icon.icon-shopping-bag.showcart');
  //pause();
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", "0");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста, введите в это поле число больше 0.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty mage-error']", "0.1");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="newsletter"]', "1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вы не можете приобрести меньше, чем 1.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", "0.1");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="newsletter"]', "1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вы не можете приобрести меньше, чем 1.');
  I.retry({ retries: 10, minTimeout: 1000 }).clearField("input[class='input-text qty']");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="newsletter"]', "1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это поле обязательно для заполнения.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty mage-error']", "9999");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="newsletter"]', "1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('У нас нет столько товара');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", "99999");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="newsletter"]', "1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вы не можете приобрести больше, чем 10000.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[class='input-text qty']", "1");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="newsletter"]', "1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.cart.main.actions > button');
  I.retry({ retries: 10, minTimeout: 1000 }).click('li:nth-child(1) > button');
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.checkout-payment-method.submit > div > div > button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('No payment method selected');
});

Scenario('test login', (I) => {
  I.amOnPage('https://mideastore.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.retry({ retries: 10, minTimeout: 1000 }).click('li.authorization-link > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вход в систему');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это поле обязательно для заполнения.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='login[username]']", "tolik_kosmal.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='login[password]']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста, введите правильный адрес электронной почты (Пример: johndoe@domain.com).');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='login[username]']", "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='login[password]']", "feq0ZYI");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('неправильный адрес электронной почты (email) или пароль.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='login[username]']", "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[name='login[password]']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Моя панель управления');
});

Scenario('test registration', (I) => {
  I.amOnPage('https://mideastore.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.top-right.mobile-center > div > div > div > ul > li:nth-child(2) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Создать новую учётную запись клиента');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='password-confirmation']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div/div[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это поле обязательно для заполнения.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='email_address']", "tolik_kosmal.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='password']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='firstname']", "Test");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='lastname']", "Account");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='password-confirmation']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="newsletter"]', "1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div/div[1]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста, введите правильный адрес электронной почты (Пример: johndoe@domain.com).');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='email_address']", "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="newsletter"]', "1");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div/div[1]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Учётная запись с таким адресом электронной почты уже существует.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='password']", "feq");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='password-confirmation']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).see('Минимальная длина этого поля');
});

Scenario('test search', (I) => {
  I.amOnPage('https://mideastore.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.fillField('//*[@id="search"]', 'пылес');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="search_mini_form"]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Результаты поиска');
  I.see('Пылесос Midea');
});

Scenario('test wishlist', (I) => {
  /*I.amOnPage('https://mideastore.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.click('li.authorization-link > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вход в систему');
  I.fillField("input[name='login[username]']", "tolik_kos@mail.ru");
  I.fillField("input[name='login[password]']", "feq0ZYIc");
  I.click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Моя панель управления');
  I.click('div.place-menu-mobile.menu-mobile > span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="store.menu"]/div/div/nav/ul/li[1]/a[1]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="maincontent"]/div[3]/div[1]/div[4]/ol/li[1]/div/div/div[2]/a/span/span');
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.Product__Actions--Bookmark > div > div > a.action.towishlist');
  I.retry({ retries: 10, minTimeout: 1000 }).see('добавлен в ваш лист пожеланий');*/
});
