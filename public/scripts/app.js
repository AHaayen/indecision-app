'use strict';

console.log('App.js is running!');

// JSX is a JavaScript Syntax Extention
// JSX - JavaScript XML

var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
