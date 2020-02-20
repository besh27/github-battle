import React from 'react';
import PropTypes from 'prop-types';
import Instructions from './Instructions';
import PlayerInput from './PlayerInput';

class Battle extends React.Component {
    render() {
        return (
            <>
                <Instructions />
                <PlayerInput label="username" onSubmit={() => {console.log("hey, you just submitted!")}} />
            </>
        )
    }
} 

export default Battle;
