console.log('App.js is running!');

// JSX is a JavaScript Syntax Extention
// JSX - JavaScript XML

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);


var templateTwo = (
    <div>
        <h1>Andres Haayen</h1>
        <p>Age: 23</p>
        <p>Location: Earth</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);