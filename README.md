# A starter Gulp setup

This is the base setup I use for my web projects. The aim of it is to be able to reuse this setup at the start of each project saving time. 
In this setup is an index.html file and a base folder structure for css, images and javaScript. The gulp setup does the following:

- Convert SASS (.scss) files to CSS
- Auto-prefix CSS with vendor specific prefix
- Minimise the CSS file
- Concatinate javaScript files into 1 scripts.js file
- Minimise the javaScript file
- Concatinate javaScript plugin files into 1 plugins.js file
- Minimise the plugins file
- Optimise images and save to a dist folder
- Cache what images have been optimised

The gulp setup also includes gulp-plumber which stops the gulp watch task stopping if there is an error in your code. gulp-jshint for hits about what is wrong with your javaScript and gulp-sourcemaps so you can see what line of your original .scss or .js file the code is on through the browser inspector.


## Motivation

This project exists so I always have a base setup to start from with each web project. It is much faster than setting it up from scratch each time and I can add or subtract to it depending on the project.

## Installation

If you would like to use this setup, to start with you will need to have Node.js and gulp installed globally.  

Once you have downloaded the project files navigate to that folder in your command line and run:

```
$ npm install
```  

This will install all of the dependencies in the package.js file and your all set. From then you can run the watch task and start coding!

```
$ gulp watch
``` 

