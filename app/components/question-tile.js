import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    update(question, params) {
      this.sendAction('updateQuestion', question, params);
    },
  }
});
