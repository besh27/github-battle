import React from 'react';
import LanguageNav from './LanguageNav';
import PropType from 'prop-types';
import { fetchPopularRepos } from '../Utils/api';
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle, FaCode } from 'react-icons/fa';

function ReporsGrid({ repos }) {
    return (
        <ul className="grid space-around">
            {repos.map((repo, index) => {
                const { name, owner, html_url, stargazers_count, forks, open_issues } = repo
                const { login, avatar_url } = owner

                return (
                    <li key={html_url} className="repo bg-light">
                        <h4 className="header-lg center-text">
                            #{index + 1}
                        </h4>
                        <img
                            className="avatar"
                            src={avatar_url}
                            alt={`Avatar for ${login}`}
                        />
                        <h2 className='center-text'>
                            <a className="link" href={html_url}>
                                {login}
                            </a>
                        </h2>
                        <ul className='card-list'>
                            <li>
                                <FaUser color="rgb(255, 191, 116)" size={22} />
                                <a href={`https://github.com/${login}`}>
                                    {login}
                                </a>
                            </li>
                            <li>
                                <FaStar color="rgb(255, 215, 0)" size={22} />
                                {stargazers_count.toLocaleString()} stars
                            </li>
                            <li>
                                <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
                                {forks.toLocaleString()} forks
                            </li>
                            <li>
                                <FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
                                {open_issues.toLocaleString()} open issues
                            </li>
                        </ul>
                    </li>
                )
            })}

        </ul>
    )
}
ReporsGrid.propType = {
    repos: PropType.array.isRequired
}
// <pre>{JSON.stringify(repos, null, 2)}</pre>
class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All',
            repos: {},
            error: null
        }
        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage,
            error: null
        })

        if (!this.state.repos[selectedLanguage]) {
            fetchPopularRepos(selectedLanguage)
                .then((data) => {
                    this.setState(({ repos }) => ({
                        repos: {
                            ...repos,
                            [selectedLanguage]: data
                        }
                    }))
                })
                .catch(() => {
                    console.warn('Error Fetching Repos: ', error)

                    this.setState({
                        error: `There was an error fetching the repositories.`
                    })
                })
        }
    }

    isLoading() {
        const { selectedLanguage, repos, error } = this.state;
        return !repos[selectedLanguage, repos, error] && error === null
    }

    render() {
        const { selectedLanguage, repos, error } = this.state
        return (
            <React.Fragment>
                <LanguageNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
                {error && <p>error</p>}
                {repos[selectedLanguage] && <ReporsGrid repos={repos[selectedLanguage]} />}
            </React.Fragment>
        )
    }
}

export default Popular;