import React from 'react';

function withHover(Component) {
    return class WithHover extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                hovering: false,
            }
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(value) {
            this.setState({
                hovering: value,
            })
        }

        render() {
            return (
                <div onMouseOver={() => this.handleChange(true)} onMouseOut={() => this.handleChange(false)}>
                    <Component hovering={this.state.hovering} {...this.props}/>
                </div>
            )
        }
    }
}

export default withHover;