
Feature('VH', {retries: 1});

Scenario('test links', (I) => {
  I.amOnPage('https://visagehall.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('БРЕНДЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="https://visagehall.ru/guestwishlist/index#wishlist/"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('В Вашем списке нет товаров.');
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.menu-icon.left-menu-active');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="https://visagehall.ru/clients-days/"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Показать все');
  I.retry({ retries: 10, minTimeout: 1000 }).amOnPage('https://visagehall.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="https://visagehall.ru/brands.html"]');
  I.retry({ retries: 10, minTimeout: 1000 }).seeInSource('class="brands-list-title">Бренды');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="https://visagehall.ru/vh-new.html"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КАТЕГОРИИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="https://visagehall.ru/visagepro.html"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ПАЛЕТКИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="https://visagehall.ru/make-up.html"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КАТЕГОРИИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="https://visagehall.ru/care.html"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КАТЕГОРИИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="https://visagehall.ru/parfum.html"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КАТЕГОРИИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="https://visagehall.ru/gifts.html"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КАТЕГОРИИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="https://visagehall.ru/instashop/"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('INSTAGRAM shopping');
  I.retry({ retries: 10, minTimeout: 1000 }).amOnPage('https://visagehall.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="/dostavka-visagehall"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Обращаем ваше внимание,');
  I.retry({ retries: 10, minTimeout: 1000 }).click('a[href="https://visagehall.ru/questions/"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ');
});
