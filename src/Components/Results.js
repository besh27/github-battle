import React from 'react';
import { battle } from '../Utils/api';
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa'
import { PropTypes } from 'prop-types';
import Card from './Card';
import Loading from './Loading';
import ProfileList from './ProfileList';

class Results extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        }
    }

    componentDidMount() {
        const { playerOne, playerTwo, onReset } = this.props;
        battle([playerOne, playerTwo])
            .then((players) => {
                this.setState({
                    winner: players[0],
                    loser: players[1],
                    error: null,
                    loading: false
                })
            }).catch(({ message }) => {
                this.setState({
                    error: message,
                    loading: false
                })
            })
    }
    render() {
        const { winner, loser, error, loading } = this.state;

        if (loading === true) {
            return <Loading text='Battling' />
        }

        if (error) {
            return (
                <p className="error">{error}</p>
            )
        }
        return (
            <>
                <div className='grid space-around container-sm'>
                    <Card
                        header={winner.score === loser.score ? 'Tie' : 'Winner'}
                        subheader={`Score: ${winner.score.toLocaleString()}`}
                        avatar={winner.profile.avatar_url}
                        href={winner.profile.html_url}
                        name={winner.profile.login}
                    >
                        <ProfileList profile={winner.profile} />
                    </Card>
                    <Card
                        header={loser.score === winner.score ? 'Tie' : 'Loser'}
                        subheader={`Score: ${loser.score.toLocaleString()}`}
                        avatar={loser.profile.avatar_url}
                        href={loser.profile.html_url}
                        name={loser.profile.login}
                    >
                        <ProfileList profile={loser.profile} />
                    </Card>
                </div>
                <button
                    className='btn dark-btn btn-space'
                    onClick={this.props.onReset}
                >
                    Reset
            </button>
            </>
        )
    }
}

Results.propTypes = {
    playerOne: PropTypes.string.isRequired,
    playerTwo: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
}

export default Results;