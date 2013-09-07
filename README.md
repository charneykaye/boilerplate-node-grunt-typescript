boilerplate-node-grunt-typescript
=================================
Template for a Node application (run on Heroku) implementing Grunt build automation and the Express.js web application framework.

Using Grunt to compile TypeScript to ECMA5.  Proof of Concept by Nick Kaye.

I have become fascinated over the past month with TypeScript, which is Microsoft's open source implementation of ECMA6 (a.k.a. JavaScript 6), the long-term strong-typed successor to our current darling, JavaScript 5.

Towards a sustainable process for truly "building" front-end applications, I have setup a very simple Backbone.js application implementing Grunt in order to keep all of the source files (JavaScript 6, css, images, html) inside of a '/src/' folder, and build to a '/build/' folder in a single command line, including compiling JavaScript 6 to 5, minifying and uglifying.

## Documentation

From the command line, navigate to the project folder.

Use the Node package manager to automatically install all of the dependencies listed in the `package.json` file,
including `grunt`, `grunt-cli`, `grunt-contrib-uglify`, `grunt-contrib-htmlmin`, `grunt-contrib-copy`,
`grunt-contrib-qunit`, `grunt-contrib-watch`, and most importantly `grunt-typescript` an implementation of Microsoft's
open source ECMA6-to-ECMA5 compiler.

    npm install

Simply run grunt to build the application for deployment, populating the `/build/` folder:

    grunt

While you're working, you can use the preconfigured watch plugin to automatically build as you modify files:

    grunt watch

## TODOS Demo App

Code borrowed from http://www.typescriptlang.org/Samples/#TodoMVC

Created by Jérôme Gravel-Niquet.

Cleanup, edits: Addy Osmani.

TypeScript version by Luke Hoban.
