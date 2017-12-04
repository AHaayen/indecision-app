import React from 'react';
import Option from './Option.js';

const Options = (props) => (
    <div>
        <button
            className="button button--link"
            onClick={props.handleDeleteOptions}
        >
            Remove All
            </button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {
            props.options.map((options) => (
                <Option
                    key={options}
                    optionText={options}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;







// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((options) => <Option key={options} optionText={options} />)
//                 }
//             </div>
//         );
//     }
// }