import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post');
  this.route('question');
  this.route('new-question');
  this.route('update-quetsion');
});

export default Router;
