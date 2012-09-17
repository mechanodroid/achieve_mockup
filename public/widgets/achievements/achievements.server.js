var achievements = training.api.data.achievements;

exports.getWidget = function(feather, cb) {
  cb(null, {
    name: "training_gc.achievements",
    path: "widgets/achievements/",
    prototype: {
    	getNumberEvents: feather.Widget.serverMethod(function(eventType, userId, _cb) {
        achievements.numberOfEvents(eventType, userId, _cb);
      }),
      checkAchievements: feather.Widget.serverMethod(function(eventType, userId, _cb) {
        achievements.checkAchievements(eventType, userId, _cb);
      })
    }
  });
};