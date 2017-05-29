import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [{
      id: 1,
      title: 'Hej'
    },{
      id: 2,
      title: 'Vad bra det går'
    }]
  }
});
