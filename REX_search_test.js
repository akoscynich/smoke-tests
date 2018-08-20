
Feature('REX', /*{retries: 2}*/);

Scenario('test search', (I) => {
  I.amOnPage('https://elektroskandia.ru');
  I.retry({ retries: 10, minTimeout: 1000 }).fillField("input[id='name']", "втулка");
  I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="f_catfilter"]/div/div[2]/a');
  I.retry({ retries: 10, minTimeout: 1000 }).see('Товаров в категории:');
});
