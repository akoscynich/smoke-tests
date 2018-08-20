
Feature('MID', {retries: 3});

Scenario('test registration', (I) => {
  I.amOnPage('https://mideastore.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Войти');
  I.retry({ retries: 10, minTimeout: 1000 }).click('div.top-right.mobile-center > div > div > div > ul > li:nth-child(2) > a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Создать новую учётную запись клиента');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div/div[1]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Это поле обязательно для заполнения.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='email_address']", "tolik_kosmal.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='password']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='firstname']", "Test");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='lastname']", "Account");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='password-confirmation']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div/div[1]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Пожалуйста, введите правильный адрес электронной почты (Пример: johndoe@domain.com).');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='email_address']", "tolik_kos@mail.ru");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div/div[1]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Учётная запись с таким адресом электронной почты уже существует.');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='password']", "feq");
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("//*[@id='password-confirmation']", "feq0ZYIc");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="form-validate"]/div/div[1]/button');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Минимальная длина этого поля');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Please enter the same value again.');
});
