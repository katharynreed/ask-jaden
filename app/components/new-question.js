import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createQuestion() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        image: this.get('image'),
      };
      this.sendAction('createQuestion', params);
    }
  }
});
