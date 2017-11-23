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

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>        
        </div> 
    );
    ReactDOM.render(templateTwo, appRoot);
    
};

renderCounterApp();