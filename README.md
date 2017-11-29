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

Qunit is the used test runner.

* Run `npm test` to see the CLI output.
* Run `npm run test-serve` to see the interactive session.


## Notes

Most of the important things are already commented in the code, I will just specify the files it is worth to look to get a sense of the application.
Even with no prior experience with ember, most of the logic is quite easy to follow. The structural hierarchy of components is like this:

```
application (route)
  index (route)
    highlight-article (component)
      highlight-paragraph (component)
      highlight-paragraph (component)
      highlight-paragraph (component)
    .. another highlight-article, etc..

```

# Files to look

  * app/templates/[application.hbs, index.hbs]: they are the templates that back the routes
  * app/routes/index.js: where the "model" is fetched,
  * app/components/[highlight-article|highlight-paragraph].js
  * app/templates/components/[highlight-article|highlight-paragraph].hbs
  * app/router.js : to see the mapping of the URLS, I added some comments.

  * app/helpers/cond-highlight.js : the helper that highlights the content.

  * app/styles/:
    * app.scss
    * default.scss

  * tests/integration/components/[highlight-article-test|highlight-paragraph-test].js: here you can find the integration tests for the components.


## Browser support

Ember 2+ supports almost all the enumerated browsers, for specific details, it can be checked on: [https://github.com/emberjs/ember.js#emberjs](https://github.com/emberjs/ember.js#emberjs)
