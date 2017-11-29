import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('highlight-paragraph', 'Integration | Component | highlight paragraph', {
  integration: true
});


test('it does not highlight anything', function(assert) {
  this.set("myParagraph", "My dog ate my interview");
  this.set("myHighlight", "blablabla");

  this.render(hbs`{{highlight-paragraph paragraph=myParagraph highlight=myHighlight}}`);

  assert.equal(this.$('.highlighted').text().trim(), '');

});


test('it Highlights properly', function(assert) {
  this.set("myParagraph", "My dog ate my interview");
  this.set("myHighlight", "interview");

  this.render(hbs`{{highlight-paragraph paragraph=myParagraph highlight=myHighlight}}`);

  assert.equal(this.$('.highlighted').text().trim(), 'interview');

});
