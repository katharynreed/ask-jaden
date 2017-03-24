import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('question');
    },

    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question');
    }
  }
});
