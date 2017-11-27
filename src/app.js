class IndecisionApp extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOptions />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>The computer was born to solve problems that did not exist before</h2>

            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
        <div>
            <p>Component Here</p>
            <Option />
        </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option component Here
            </div>
        )
    }
}


class AddOptions extends React.Component {
    render() {
        return (
        <div>
            <p>AddOption Component Here</p>
        </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));