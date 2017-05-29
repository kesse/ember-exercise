import Ember from 'ember';

export default Ember.Controller.extend({
  showBody: true,


  actions: {
    toggleBody() {
      this.toggleProperty('showBody');
    }
  }
});
