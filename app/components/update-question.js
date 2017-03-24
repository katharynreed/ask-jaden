import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    updateQuestion(question) {
      var params = {
        questionText: this.get('questionText'),
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
