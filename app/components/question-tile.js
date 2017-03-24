import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question, params) {
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    },
  }
});
