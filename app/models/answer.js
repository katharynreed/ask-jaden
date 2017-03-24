import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr('string'),
  title: DS.attr('string'),
  author: DS.attr('string'),
  image: DS.attr('string'),
  question: DS.belongsTo('question', {async: true}),
});
