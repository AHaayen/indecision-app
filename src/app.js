console.log('App.js is running!');

// JSX is a JavaScript Syntax Extention
// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'The computer was born to solve problems that did not exist before',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle &&<p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);


const user = {
    name: 'Andres',
    age: 23,
    location: 'EARTH'
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    } 
    // else {
    //     return undefined;
    // }
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);



const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);