import Ember from 'ember';

export default Ember.Route.extend({
  // Model() is the hook that gets called always in the route and it would
  // correspond to the "Model" part in MVC. Essentially every time you visit a
  // URL, the mapped route is entered, and the model executed, normally returning
  // some data from an API whatever data you want to feed to the controller, and
  // ultimately to the view.

  // I just assume that articles are part of data fetched from an API as the typical
  // use case, then transformed and presented.
  // As always, Ember makes life easier and if we install ember-mirage we have a
  // super nice mock server with fixtures, random data seeding and stuff.
  // TODO: Provide the additional example with jQuery and block parameters.
  model() {
    return [
      {
        "id": 1,
        "title": "My Article",
        "paragraphs": [
          "There was an Old Lady of Prague, Whose language was horribly vague; When they said, 'Are these caps?' She answered, 'Perhaps!' That oracular Lady of Prague.",
          "There was an Old Person of Sparta, Who had twenty-one sons and one 'darter'; He fed them on snails, And weighed them in scales, That wonderful Person of Sparta.",
          "There was an Old Man at a casement, Who held up his hands in amazement; When they said, 'Sir, you'll fall!' He replied, 'Not at all!' That incipient Old Man at a casement"
        ]
      }
    ]
  }
});
