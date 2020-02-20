# Life Cycle Methods

1. When the components is added to the DOM (mounting)
2. When the component updates its state or receives new data via props(updating)
3. When the component get removed from the DOm (unmounting)

## Mounting
- Set the component's initial state
    - Constructor is the first method to be invoked. 
    - This will establish the component's init state. 
- Render a DOM node
    - The render method is the next life cycle method to be called. 
    - This needs to be a pure function. 
- Make an AJAX request
    - componentDidMount should be where AJAX request should be placed. 
    ```javascript
    componentDidMount(){
        fetchUser(this.props.username)
            .then((user) => {
                this.setState({ user })
            })
    }
    ```

- Set up listeners (ie. via  WEb sockets or Firebase)
    - very similar to setting up AJAX requests. 
    - Also use componentDidMount

---

## Updating
- Re-render the UI with the updated state or props
- Re-render data
    - componentDidUpdate is great for updating the view to show updates to state. 
    ```javascript
    componentDidUpdate(prevProps, prevState){
        if (this.props.language !== prevProps.language){
            this.setState({repos: null})
        }
        fetchRepos(this.props.language)
            .then((repos) => {
                this.setState({ repos })
            })
    }
    ```
- Resetting a listener
    - Can also use componentDidUpdate.



## Unmounting
- Cleanup, remove listeners, etc.
- componentWillUnmount
    ```javascript
    componentDidMount(){
        this.removeListener = listenToRepos(this.props.language, (repos) => {
            this.setState({ repos})
        })
    }
    componentWillUnmount(){
        this.removeListener()
    }
    ```

