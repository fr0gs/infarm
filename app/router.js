import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});


// You don't need to see the mapping for the application route (/) or the index routes
// since they are taken for granted in every application, and therefore they can be ignored.
// Otherwise you could do it explicitly, as desired.
Router.map(function() {
});

export default Router;
