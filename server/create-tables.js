'use strict';

var server = require('./server');
var events = require('events');
var ds = server.dataSources.db;

events.EventEmitter.defaultMaxListeners = 15;

ds.automigrate(function(er) {
  if (er) throw er;
  console.log('Tables created in ', ds.adapter.name);
  ds.disconnect();
});
