//temp for mockup
var achievement1 = {
  name : "loggedIn5Times",
  events : [ 
    { name : "loggedIn",
    src : "PenThePenquin",
    occurences : 5 }
  ],
  date : "060212",
  maxAwarded: 5,
  rewards : [
    { type : "trophy",
      value : 10 }
  ],
  prerequisites : []
}

var event1 = {
  name : "loggedIn",
  user_id : "123",
  src : "PenThePenquin",
  date : "0612012"
}

feather.ns("training_gc");
(function() {
  training_gc.achievements = feather.Widget.create({
    name: "training_gc.achievements",
    path: "widgets/achievements/",
    prototype: {
      onInit: function() {
        
      },
      onReady: function() {
        var me = this;


        //when one of my buttons is clicked
        me.domEvents.bind(me.get("#getAchievementsButton"), "click", function() {
          var i = 5;     
          var valSel = me.get("#eventSelectText").val();
          feather.alert('achievement js calling eventFindAt with id ' +  valSel);          
          me.server_getNumberEvents([valSel, "123"], function(args){
            feather.alert('I found '+ args.result.documents[0] + ' events of type '+ valSel +' with a hardcoded game = PenThePenquin');
            });          
          me.server_checkAchievements([valSel, "123"], function(args2){
            feather.alert('I found an achievement satisfying the event requirements: '+ args2.result.documents[0].name+ '!');
          });
        });
      }
    }
  });
})();