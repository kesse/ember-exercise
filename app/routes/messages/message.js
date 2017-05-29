import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return $.getJSON('/api/messages/' + params.message_id)
  }
});
