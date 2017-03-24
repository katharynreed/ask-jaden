import DS from 'ember-data';

export default DS.Model.extend({
  questionText: DS.attr('string'),
  title: DS.attr('string'),
  author: DS.attr('string'),
  image: DS.attr('string'),
  answers: DS.hasMany('answer', { async: true }),
});
