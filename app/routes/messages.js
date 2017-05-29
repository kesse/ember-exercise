import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.$.getJSON('/api/messages').then(function(data) {
      return data.messages;
    });
  }
});
