import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createQuestion() {
      var params = {
        questionText: this.get('questionText'),
        author: this.get('author'),
        title: this.get('title'),
      };
      this.sendAction('createQuestion', params);
    }
  }
});
