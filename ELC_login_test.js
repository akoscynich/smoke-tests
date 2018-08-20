
Feature('ELC', {retries: 3});

Scenario('test login', (I) => {
  I.amOnPage('https://www.elc-russia.ru/');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="mm-0"]/div[1]/div[2]/a[2]/i');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="email"]', 'tolik_kos@mail.ru');
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="pass"]', 'feq0ZYIc');
  I.retry({ retries: 5, minTimeout: 1000 }).click('//*[@id="modal_auth"]/div/div[2]/div[2]/div/form/div[4]/div[1]/button');
  I.retry({ retries: 5, minTimeout: 1000 }).see('Мой аккаунт');
});
