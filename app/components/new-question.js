import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createQuestion() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        title: this.get('title'),
      };
      this.sendAction('createQuestion', params);
    }
  }
});
