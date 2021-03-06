import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { auth, googleProvider } from './firebaseConfig'

const styles = {
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

class Auth extends Component {
    state = {
        isUserLoggedIn: false,
    }

    componentDidMount = () => {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                } else {
                    this.setState({ isUserLoggedIn: false })
                }
            }
        )
    }

    onLogInClick = () => {
        auth.signInWithPopup(googleProvider)
            .catch(console.log)
    }

    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn ?
                        this.props.children
                        :
                        <div
                            style={styles.root}
                        >
                            <h1>JFDDL7 CHAT</h1>
                            <Button
                                variant={'contained'}
                                color={'secondary'}
                                onClick={this.onLogInClick}
                            >
                                ZALOGUJ SIĘ PRZEZ KONTO GOOGLE
                            </Button>
                        </div>
                }
            </div>
        )
    }
}

export default Auth
