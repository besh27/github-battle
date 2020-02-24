import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle'
import { ThemeProvider } from './contexts/theme';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(({ theme }) => ({
                    theme: theme === 'light' ? 'dark' : 'light'
                }))
            }
        }
    }
    render() {
        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}>
                        <div className="container">
                            <Nav />
                            <Route path="/" component={Popular} />
                            <Route path="/battle" component={Battle} />
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)