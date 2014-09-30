Speeches = new Mongo.Collection('speeches');

if (Meteor.isClient) {
    
    Template.speeches.helpers({
        speeches: function() {
            return Speeches.find({}, {sort: {votes: -1}}).fetch();
        }
    });
    
    Template.speeches.events({
        'click dd button': function() {
            this.votes++;
            Speeches.update({_id: this._id}, this);
        }
    });
    
    Template.speechForm.events({
        'click form[name=addEntryForm] button': function(event) {
            var form = $(event.target).parents('form'),
                title = $('input#title', form),
                description = $('textarea#description', form);
            
            if (title.val() && description.val()) {
                Speeches.insert({title: title.val(), description: description.val(), votes: 0});
                title.val('');
                description.val('');
            }
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
