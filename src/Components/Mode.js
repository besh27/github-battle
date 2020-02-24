import React from 'react';

class Mode extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mode: 'light'
        }
        this.handleMode = this.handleMode.bind(this)
    }
    handleLightMode() {
        // Change 'mode' on the component's state to 'light'
        this.setState({
            mode: 'light'
        })
    }
    handleMode() {
        this.state.mode !== 'light' ?
            this.setState({
                mode: 'light'
            }) :
            this.setState({
                mode: 'dark'
            })
    }
    render() {
        const { mode } = this.state

        return (
            <div style={{
                height: '100%',
                background: mode === 'light' ? '#fff' : '#000'
            }}>
                {mode === 'light'
                    ? <button onClick={this.handleMode}>Dark Mode</button>
                    : <button onClick={this.handleMode}>Light Mode</button>}
            </div>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById('app')
);

export default Mode;