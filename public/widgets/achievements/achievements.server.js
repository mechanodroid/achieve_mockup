var achievements = training.api.data.achievements;

exports.getWidget = function(feather, cb) {
  cb(null, {
    name: "training_gc.achievements",
    path: "widgets/achievements/",
    prototype: {
    	getNumberEvents: feather.Widget.serverMethod(function(_cb) {
        achievements.numberOfEvents(_cb);
      })
    }
  });
};