
Feature('MID', {retries: 3});

Scenario('test login', (I) => {
  I.amOnPage('https://mideastore.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.click('li.authorization-link > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Вход в систему');
  I.click('//*[@id="send2"]');
  I.see('Это поле обязательно для заполнения.');
  I.fillField("input[name='login[username]']", "tolik_kosmal.ru");
  I.fillField("input[name='login[password]']", "feq0ZYIc");
  I.click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста, введите правильный адрес электронной почты (Пример: johndoe@domain.com).');
  I.fillField("input[name='login[username]']", "tolik_kos@mail.ru");
  I.fillField("input[name='login[password]']", "feq0ZYI");
  I.click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('неправильный адрес электронной почты (email) или пароль.');
  I.fillField("input[name='login[username]']", "tolik_kos@mail.ru");
  I.fillField("input[name='login[password]']", "feq0ZYIc");
  I.click('//*[@id="send2"]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Моя панель управления');
});
