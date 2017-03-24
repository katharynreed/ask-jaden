import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateRentalForm', true);
    },

    update(question) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        image: this.get('image'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
