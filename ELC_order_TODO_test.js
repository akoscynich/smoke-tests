
Feature('ELC', /*{retries: 2}*/);

Scenario('test order TODO', (I) => {
  I.amOnPage('https://www.elc-russia.ru/konstruktory/konstruktory-lego.html');
  I.wait(3);
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="categoryProducts"]/div[1]/div[1]/div[4]');
  //I.wait(3);
//todo
  //I.tap('//*[@id="categoryProducts"]/div[1]/div[1]/div[4]');
  //I.wait(5);
  //I.retry({ retries: 10, minTimeout: 1000 }).see('Отмеченные товары');

});
