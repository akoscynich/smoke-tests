
Feature('ALL', /*{retries: 2}*/);

Scenario('screenshots NOT WORKS', (I) => {
  //MET
  /*I.amOnPage('https://metpromko.ru/');

  //I.retry({ retries: 10, minTimeout: 1000 }).click('//*[@id="cities-popup"]/div/div/span');
  I.wait(1);
  I.saveScreenshot('MET_main.png');
  /*I.amOnPage('https://metpromko.ru/checkout/cart/');
  I.saveScreenshot('MET_checkout.png');
  I.amOnPage('https://metpromko.ru/contacts');
  I.saveScreenshot('MET_contacts.png');
  I.amOnPage('https://metpromko.ru/about/');
  I.saveScreenshot('MET_about.png');
  I.amOnPage('https://metpromko.ru/dostavka/');
  I.saveScreenshot('MET_dostavka.png');
  I.amOnPage('https://metpromko.ru/oplata/');
  I.saveScreenshot('MET_oplata.png');
  I.amOnPage('https://metpromko.ru/uslugi/');
  I.saveScreenshot('MET_uslugi.png');
  I.amOnPage('https://metpromko.ru/customer/account/login/');
  I.saveScreenshot('MET_login.png');
  I.click('//*[@id="login-form"]/div/div/div[2]/div/div/div/button');
  I.wait(1);
  I.saveScreenshot('MET_registration.png');
  I.amOnPage('https://metpromko.ru/metalloprokat');
  I.wait(4);
  I.saveScreenshot('MET_catalog.png');
  //ELC
  I.amOnPage('https://www.elc-russia.ru/');
  I.saveScreenshot('ELC_main.png');
  I.amOnPage('https://www.elc-russia.ru/store-locator');
  I.saveScreenshot('ELC_store-locator.png');
  I.amOnPage('https://www.elc-russia.ru/delivery/');
  I.saveScreenshot('ELC_delivery.png');
  I.amOnPage('https://www.elc-russia.ru/trackorder/');
  I.saveScreenshot('ELC_trackorder.png');
  I.amOnPage('https://www.elc-russia.ru/careers');
  I.saveScreenshot('ELC_careers.png');
  I.amOnPage('https://www.elc-russia.ru/rental');
  I.saveScreenshot('ELC_rental.png');
  I.amOnPage('https://www.elc-russia.ru/#modal_auth');
  I.saveScreenshot('ELC_login.png');
  I.amOnPage('https://www.elc-russia.ru/customer/account/login/');
  I.saveScreenshot('ELC_registration.png');
  I.amOnPage('https://www.elc-russia.ru/returns');
  I.saveScreenshot('ELC_returns.png');
  I.amOnPage('https://www.elc-russia.ru/terms');
  I.saveScreenshot('ELC_terms.png');
  I.amOnPage('https://www.elc-russia.ru/catalog/seo_sitemap/category/');
  I.saveScreenshot('ELC_sitemap.png');
  I.amOnPage('https://www.elc-russia.ru/privacy-policy');
  I.saveScreenshot('ELC_privacy-policy.png');
  I.amOnPage('https://www.elc-russia.ru/disclamer');
  I.saveScreenshot('ELC_disclamer.png');
  I.amOnPage('https://www.elc-russia.ru/partnership');
  I.saveScreenshot('ELC_partnership.png');
  I.amOnPage('https://www.elc-russia.ru/blog/');
  I.saveScreenshot('ELC_blog.png');
  I.amOnPage('https://www.elc-russia.ru/about-us');
  I.saveScreenshot('ELC_about.png');
  I.amOnPage('https://www.elc-russia.ru/corporate_clients');
  I.saveScreenshot('ELC_corporate_clients.png');
  I.amOnPage('https://www.elc-russia.ru/elc-birthday-club-terms');
  I.saveScreenshot('ELC_birthday-club.png');
  I.amOnPage('https://www.elc-russia.ru/pcorp');
  I.saveScreenshot('ELC_pcorp.png');
  I.amOnPage('https://www.elc-russia.ru/articles');
  I.saveScreenshot('ELC_articles.png');
  I.amOnPage('https://www.elc-russia.ru/contacts/');
  I.saveScreenshot('ELC_contacts.png');
  I.amOnPage('https://www.elc-russia.ru/konstruktory.html');
  I.saveScreenshot('ELC_cataog.png');
  //MID
  I.amOnPage('https://www.mideastore.ru/');
  I.saveScreenshot('MID_main.png');
  I.amOnPage('https://www.mideastore.ru/payment');
  I.saveScreenshot('MID_payment.png');
  I.amOnPage('https://www.mideastore.ru/stockists/');
  I.saveScreenshot('MID_stockists.png');
  I.amOnPage('https://www.mideastore.ru/about-us');
  I.saveScreenshot('MID_about.png');
  I.amOnPage('https://www.mideastore.ru/contacts');
  I.saveScreenshot('MID_contacts.png');
  I.amOnPage('https://www.mideastore.ru/customer/account/login/');
  I.saveScreenshot('MID_login.png');
  I.amOnPage('https://www.mideastore.ru/customer/account/create/');
  I.saveScreenshot('MID_registration.png');
  I.amOnPage('https://www.mideastore.ru/checkout/cart/');
  I.saveScreenshot('MID_cart.png');
  I.amOnPage('https://www.mideastore.ru/blog/');
  I.saveScreenshot('MID_blog.png');
  I.amOnPage('https://www.mideastore.ru/privacy-policy');
  I.saveScreenshot('MID_privacy-policy.png');
  I.amOnPage('https://www.mideastore.ru/price1');
  I.saveScreenshot('MID_dogovor.png');
  I.amOnPage('https://www.mideastore.ru/vstraivaemaja-bytovaja-tehnika.html');
  I.saveScreenshot('MID_cataog.png');
  //REX
  I.amOnPage('https://elektroskandia.ru/');
  I.saveScreenshot('REX_main.png');
  I.amOnPage('https://elektroskandia.ru/catalog/');
  I.saveScreenshot('REX_catalog.png');
  I.amOnPage('https://elektroskandia.ru/s/8/o_kompanii.html');
  I.saveScreenshot('REX_o_kompanii.png');
  I.amOnPage('https://elektroskandia.ru/s/25/postawschiki.html');
  I.saveScreenshot('REX_postawschiki.png');
  I.amOnPage('https://elektroskandia.ru/s/28/nashi_sertifikaty.html');
  I.saveScreenshot('REX_sertifikaty.png');
  I.amOnPage('https://elektroskandia.ru/s/13/');
  I.saveScreenshot('REX_contacts.png');
  I.amOnPage('https://elektroskandia.ru/register/full/');
  I.saveScreenshot('REX_registration.png');
  I.amOnPage('https://elektroskandia.ru/remind/');
  I.saveScreenshot('REX_remind.png');
  //ST
  I.amOnPage('https://freshub.ru/');
  I.saveScreenshot('ST_main.png');
  I.amOnPage('https://freshub.ru/customer/account/login/referer/');
  I.saveScreenshot('ST_login.png');
  I.amOnPage('https://freshub.ru/customer/account/create/');
  I.saveScreenshot('ST_registration.png');
  I.amOnPage('https://freshub.ru/uhod-dlja-tela.html');
  I.saveScreenshot('ST_catalog.png');
  I.amOnPage('https://freshub.ru/customer-service');
  I.saveScreenshot('ST_customer-service.png');
  I.amOnPage('https://freshub.ru/vozvrat-tovara');
  I.saveScreenshot('ST_vozvrat-tovara.png');
  I.amOnPage('https://freshub.ru/contact/');
  I.saveScreenshot('ST_contact.png');
  I.amOnPage('https://freshub.ru/uslovija-prodazhi-tovarov');
  I.saveScreenshot('ST_uslovija-prodazhi.png');
  I.amOnPage('https://freshub.ru/politika-v-otnoshenii-obrabotki-personal-nyh-dannyh');
  I.saveScreenshot('ST_politika.png');
  I.amOnPage('https://freshub.ru/about-us');
  I.saveScreenshot('ST_about.png');
  I.amOnPage('https://freshub.ru/contact/franchising/');
  I.saveScreenshot('ST_franchising.png');
  I.amOnPage('https://freshub.ru/contact/franchising/optovie-prodazi/');
  I.saveScreenshot('ST_optovie-prodazi.png');
  //VH
  I.amOnPage('https://visagehall.ru/');
  I.saveScreenshot('VH_main.png');
  I.amOnPage('https://visagehall.ru/checkout/cart/');
  I.saveScreenshot('VH_cart.png');
  I.amOnPage('https://visagehall.ru/');
  I.retry({ retries: 5, minTimeout: 500 }).click('//*[@id="menu-icon"]');
  I.saveScreenshot('VH_login.png');
  I.amOnPage('https://visagehall.ru/guestwishlist/index#wishlist/');
  I.saveScreenshot('VH_wishlist.png');
  I.amOnPage('https://visagehall.ru/clients-days/');
  I.saveScreenshot('VH_clients-days.png');
  I.amOnPage('https://visagehall.ru/dostavka-visagehall/');
  I.saveScreenshot('VH_dostavka.png');
  I.amOnPage('https://visagehall.ru/grafik-vh/');
  I.saveScreenshot('VH_grafik.png');
  I.amOnPage('https://visagehall.ru/vh-new.html');
  I.saveScreenshot('VH_new.png');
  //WF
  I.amOnPage('https://ru.wileyfox.com/');
  I.saveScreenshot('WF_main.png');
  I.amOnPage('https://ru.wileyfox.com/smartphones/');
  I.saveScreenshot('WF_smartphones.png');
  I.amOnPage('https://ru.wileyfox.com/support/');
  I.saveScreenshot('WF_support.png');
  I.amOnPage('https://ru.wileyfox.com/about-us/');
  I.saveScreenshot('WF_about.png');
  I.amOnPage('https://ru.wileyfox.com/compare/');
  I.saveScreenshot('WF_compare.png');
  I.amOnPage('https://ru.wileyfox.com/service-and-warranty/');
  I.saveScreenshot('WF_service.png');
  I.amOnPage('https://ru.wileyfox.com/about-us/contacts/');
  I.saveScreenshot('WF_contacts.png');
  I.amOnPage('https://ru.wileyfox.com/products/swift/');
  I.saveScreenshot('WF_catalog.png');
  //
*/
  });
