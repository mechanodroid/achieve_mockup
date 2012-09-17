var airborne = require('./airborne').getClient(),
  _ = require('underscore');

var api = _.extend({}, airborne);
api.channels = require("./channels");
api.data = require("./data/data");
  //activeGamesChannel: require("./activeGamesChannel")

// Stuff we need to do
api.channels.addChatChannel("lobby");
var gamesChannel = api.channels.addGamesChannel();

api.data.activeGames.on('itemAdded', function(game) {
  gamesChannel.sendMessage('add', game);
});

api.data.activeGames.on('itemChanged', function(game) {
  gamesChannel.sendMessage('update', game);
});

api.data.activeGames.on('itemRemoved', function(game) {
  gamesChannel.sendMessage('remove', game);
});

module.exports = api;