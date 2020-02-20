import React from 'react';
import LanguageNav from './LanguageNav';
import { fetchPopularRepos } from './../Utils/api';

class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All',
            repos: null,
            error: null
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage, 
            repos: null,
            error: null
        })
    }

    render() {
        const { selectedLanguage } = this.state
        return (
            <React.Fragment>
                <LanguageNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
            </React.Fragment>
        )
    }
}

export default Popular;