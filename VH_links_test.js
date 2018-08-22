
Feature('VH', {retries: 2});

Scenario('test links', (I) => {
  I.amOnPage('https://visagehall.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).see('БРЕНДЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu-icon"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="megamenu"]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Бренды');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu-icon"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="megamenu"]/ul/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('АРОМАТЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="megamenu"]/ul/li[3]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="megamenu"]/ul/li[1]/div');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/footer/div[2]/a[3]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Обращаем ваше внимание,');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/footer/div[2]/a[2]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ВИЗАЖ ХОЛЛ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/footer/div[2]/a[4]');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ОТДЕЛ РАЗВИТИЯ');
});
