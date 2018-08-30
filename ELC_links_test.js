
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
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/action7.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Бестселлеры<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/elcru_toy_brand/elc"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>ELC<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/world-of-adventures/constructions/lego.html"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Конструкторы LEGO<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/elc-birthday-club-terms"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Правила и Условия Клуба');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/delivery"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Доставка и оплата');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/returns"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Возврат товара в интернет-магазин Elc-russia.ru');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/terms"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Публичная оферта');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/catalog/seo_sitemap/category/"]');
          I.retry({ retries: 5, minTimeout: 1000 }).seeInSource('>Интернет-магазин развивающих игрушек<');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/privacy-policy"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Обработка персональных данных');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/disclamer"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Официальное уведомление');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="//www.elc-russia.ru/trackorder"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Отследить статус вашего заказа');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/partnership"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Зарабатывайте вместе с партнерской программой ELC');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/blog/discont5"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Нашли в другом магазине товар дешевле?');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/about-us"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('О компании ELC');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/careers"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Сделай карьеру в ELC');
          I.retry({ retries: 5, minTimeout: 1000 }).click('a[href="/corporate_clients"]');
          I.retry({ retries: 5, minTimeout: 1000 }).see('Информация для корпоративных и оптовых покупателей');
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
