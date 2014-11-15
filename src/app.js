/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

var main = new UI.Card({
  title: 'PebblePanic',
  //icon: 'images/menu_icon.png',
  subtitle: 'vDev',
  body: '<strong>UP</string> - ambulance \n<strong>Select</strong> - text contacts \n<strong>Down</strong> - Fire/Police'
});

main.show();

main.on('click', 'up', function(e) {
  var card = new UI.Card();
  //card.title('Ambulance');
  card.subtitle('Ambulance');
  card.body('Called Ambulance');
  card.show();
});

main.on('click', 'select', function(e) {
  var card = new UI.Card();
  card.title('Contacts');
  //card.subtitle('Is a Window');
  card.body('Messaged Emergency Contacts');
  card.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('Fire/Police');
  //card.subtitle('Is a Window');
  card.body('Called fire and ambulance');
  card.show();
});
