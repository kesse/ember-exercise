import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return Ember.$.getJSON('/api/messages/' + params.message_id).then(function(data) {
      return data.message;
    })
  }
});
