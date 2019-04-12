import React, { Component } from 'react'

class Auth extends Component {
    state = {
        isUserLoggedIn: false,
    }

    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn ?
                    this.pros.children
                    :
                    <button></button>
                }
            </div>
        )
    }
}

export default Auth
