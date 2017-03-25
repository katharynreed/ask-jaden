import Ember from 'ember';

export default Ember.Component.extend({
  answerForm: false,
  actions: {
      answerForm() {
        this.set('answerForm', true)
      },
      createAnswer() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        answerText: this.get('answerText'),
        question: this.get('question'),
      };
      this.set('answerForm', false);
      debugger;
      this.sendAction('createAnswer', params);
    }
  }
});
