import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('highlight-paragraph', 'Integration | Component | highlight paragraph', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{highlight-paragraph}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#highlight-paragraph}}
      template block text
    {{/highlight-paragraph}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
