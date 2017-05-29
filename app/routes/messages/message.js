import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return {
      id: 1,
      title: 'Hej ' + params.message_id,
      body: 'Mitt första meddelande'
    }
  }
});
