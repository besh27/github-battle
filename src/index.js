import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Popular from './Components/Popular';

const text = {
    "popularText": "Hey there world!"
}

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Popular />
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)