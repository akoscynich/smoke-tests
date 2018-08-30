
Feature('ELC', {retries: 1});

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
