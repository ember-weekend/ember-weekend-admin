# Ember Weekend Admin Panel

The admin panel for the Ember Weekend Elixir/Phoenix API.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Yarn](https://yarnpkg.com/)

## Installation

```
$ git clone ember-weekend-admin
$ cd ember-weekend-admin
$ yarn install
$ bower install
```

## Running / Development

With Mirage

```
$ ember serve
```

With API server

```
$ ember serve --proxy http://localhost:4000
```

Open [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Deploying

```
git remote add staging https://git.heroku.com/ember-weekend-admin-staging.git
git push staging master
```
