
Feature('WF', {retries: 2});

Scenario('test links', (I) => {
  I.amOnPage('https://ru.wileyfox.com/');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ПАРТНЁРЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_mobile"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_sm"]/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('СЛУЖБА ПОДДЕРЖКИ');
  I.wait(1);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_mobile"]');
  I.wait(1);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_sm"]/li[3]/a');
  I.wait(1);
  I.retry({ retries: 10, minTimeout: 1000 }).see('ЧТО НАХОДИТСЯ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_mobile"]');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="menu_sm"]/li[4]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Задать вопрос в техподдержку');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[5]/div/div[1]/div[2]/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ОБСЛУЖИВАНИЕ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[5]/div/div[1]/div[2]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('СЛУЖБА ПОДДЕРЖКИ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[5]/div/div[1]/div[3]/ul/li[1]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ЧТО НАХОДИТСЯ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('/html/body/div[6]/div/div[1]/div[3]/ul/li[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('КОНТАКТЫ');
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="top-menu"]/div[1]/div[3]/a/i');
  I.retry({ retries: 10, minTimeout: 1000 }).see('ОЧИСТИТЬ ВСЮ ТАБЛИЦУ');
});

Scenario('screenshots', (I) => {
I.amOnPage('https://ru.wileyfox.com/');
I.saveScreenshot('WF_main.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/WF_main.png');
I.amOnPage('https://ru.wileyfox.com/smartphones/');
I.saveScreenshot('WF_smartphones.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/WF_smartphones.png');
I.amOnPage('https://ru.wileyfox.com/support/');
I.saveScreenshot('WF_support.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/WF_support.png');
I.amOnPage('https://ru.wileyfox.com/about-us/');
I.saveScreenshot('WF_about.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/WF_about.png');
I.amOnPage('https://ru.wileyfox.com/compare/');
I.saveScreenshot('WF_compare.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/WF_compare.png');
I.amOnPage('https://ru.wileyfox.com/service-and-warranty/');
I.saveScreenshot('WF_service.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/WF_service.png');
I.amOnPage('https://ru.wileyfox.com/about-us/contacts/');
I.saveScreenshot('WF_contacts.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/WF_contacts.png');
I.amOnPage('https://ru.wileyfox.com/products/swift/');
I.saveScreenshot('WF_catalog.png');
I.addMochawesomeContext('/Users/hamster/codecept/mochawesome-report/WF_catalog.png');
});
