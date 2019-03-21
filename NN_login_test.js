
Feature('NN', /*{retries: 2}*/);

Scenario('test login DISABLED', (I) => {
  I.amOnPage('https://www.nespresso.com/ru/ru/customer/account/login/');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Кофе-капсулы');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это обязательное поле');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="email"]', 'tolik_kos@mail.ru')
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="pass"]', 'acid')
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Please enter 6 or more characters. Leading or trailing spaces will be ignored.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="email"]', 'tolik_kos@mail.ru')
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="pass"]', 'acid198')
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Введён некорректный логин или пароль.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="email"]', 'tolik_kos@mail.ru')
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="pass"]', 'acid1985')
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Панель управления');


});
