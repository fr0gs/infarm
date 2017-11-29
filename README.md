# Infarm

## Installation

If you have installed the programs in the list:

* `git clone <repository-url>` this repository
* `cd infr`
* `npm install` or `yarn`
* `bower install`

Alternatively, if you have docker installed and don't want to install npm, bower & ember I created a docker image:

```
$ docker build -t infr .
```

## Running / Development

* To run locally type `npm start` and visit `http://localhost:4200`
* To run the docker image:
  * `sh ./run.sh`. (If it does not run please check the name of the built image is **infr**)
  * visit `http://localhost`

## Tests

Run `npm run test-serve`, npm test only will fail the acceptance tests and you won't have the chance of seeing the interaction. Qunit is the used test runner.

## Considerations

### Pros

* I picked Ember as the framework of choice since it maximizes developer's productivity once you are acquainted with the frameworks' specifics. I could have used plain js + jQuery but I am much faster with Ember.
* Extensive browser support.
* Almost one addon for every piece of functionality, very easy to extend with new components.

### Cons

* Resulting javascript size is quite big, it is an overwill for a small project.
* There is not always an addon that does what you want, sometimes I you neet to hack around.

## Notes

* In order to mock the users API ember allows to generate a small express application locally, but I chose to use `ember-cli-mirage` since it is supposed to be as production-like as possible, with a small delay to fake network latency.
* I preferred to use the convention of preprending a `@` before looking for user matches, either by name or by username, otherwise even with a debounce the frontend would be querying the backend for user matches every time the user writes.
* Per each mention the whole users list is fetched from the backend and filtered on the client side. This is very bad if the list is huge, and bad in general. Ideally the call would be a query to an ElasticSearch or Solr instance and the already filtered set of users would be retrieved.

## Files to look

Even with no prior experience with ember, most of the logic is in the **comment-mentions** component.

  * app/mixins/resize-textarea.js: mixin to automatically resize comment textarea to fit the text.

  * app/templates/application.hbs: main template that renders a navbar & `comment-mentions` component.

  * app/components/comment-mentions.js & app/templates/components/comment-mentions.hbs: logic & markup for the main `comment-mentions` component.

  * app/styles/:
    * app.scss
    * default.scss

  * mirage/
    * fixtures/users.js: the list of users
    * models/user.js: the fake model describing user attributes.
    * scenarios/default.js: will load the fixtures into memory.
    * config.js: configuration fake endpoint.

  * tests/
    * acceptance/users-list-test.js: real world interaction with the component.
    * integration/components/comment-mentions.js: rendering of the component


## Browser support

Ember 2+ supports almost all the enumerated browsers, for specific details, it can be checked on: [https://github.com/emberjs/ember.js#emberjs](https://github.com/emberjs/ember.js#emberjs)
