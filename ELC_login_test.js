
Feature('ELC', {retries: 1});

Scenario('test login', (I) => {
  I.amOnPage('https://www.elc-russia.ru/');
  //pause();
  I.retry({ retries: 10, minTimeout: 1000 }).click('#mm-0 > div.header-top > div.header-top__line > a.account');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField('//*[@id="email"]', 'tolik_kos@mail.ru');
  I.retry({ retries: 5, minTimeout: 1000 }).fillField('//*[@id="pass"]', 'feq0ZYIc');
  I.retry({ retries: 5, minTimeout: 1000 }).click('//*[@id="modal_auth"]/div/div[2]/div[2]/div/form/div[4]/div[1]/button');
  I.retry({ retries: 5, minTimeout: 1000 }).see('Мой аккаунт');
});
