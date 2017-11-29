import Ember from 'ember';

// Since the highlighting logic is per article it is logic to put the condition here
// in the upper level, but it would be simple to add more granularity and highlight
// a different set of terms per paragraph with this structure.
export default Ember.Component.extend({
  highlightText: "That wonderful Person of Sparta"
});
