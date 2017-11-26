const app = {
    title: 'Visibility Toggle'
}

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};


const render = () => {
    const build = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Here are some details you can see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(build, document.getElementById('app'));
};

render();