'use strict';

console.log('App.js is running!');

// JSX is a JavaScript Syntax Extention
// JSX - JavaScript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Andres Haayen'
    ),
    React.createElement(
        'p',
        null,
        'Age: 23'
    ),
    React.createElement(
        'p',
        null,
        'Location: Earth'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
