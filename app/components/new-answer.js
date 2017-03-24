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
        answer: this.get('answer'),
        question: this.get('question'),
      };
      this.sendAction('createAnswer', params);
    }
  }
});
