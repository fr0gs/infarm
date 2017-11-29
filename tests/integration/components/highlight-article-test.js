import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('highlight-article', 'Integration | Component | highlight article', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{highlight-article}}`);

  // So the header is rendered.
  assert.equal(this.$('.article__id').text().trim(), 'Id:');
  assert.equal(this.$('.article__title').text().trim(), 'Title:');

});
