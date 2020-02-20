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
        this.isLoading = this.isLoading.bind(this)
    }

    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage, 
            repos: null,
            error: null
        })
        
        fetchPopularRepos(selectedLanguage)
            .then((repos) => this.setState({
                repos, 
                error: null, 
            }))
            .catch(() => {
                console.warn('Error Fetching Repos: ', error)
                
                this.setState({
                    error: `There was an error fetching the repositories.`
                })
            })
        
    }

    isLoading(){
        return this.state.repos === null &&
               this.state.error === null
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
        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
            </React.Fragment>
        )
    }
}

export default Popular;