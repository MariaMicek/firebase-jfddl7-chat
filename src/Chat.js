import React, { Component } from 'react'
import { database } from './firebaseConfig'
import MessageList from './MessageList'
import NewMessageForm from './NewMessageForm'
import { auth } from './firebaseConfig'
import Snackbar from '@material-ui/core/Snackbar'
import Fade from '@material-ui/core/Fade'

class Chat extends Component {
    state = {
        messages: null,
        newMessageText: '',
        isSackbarOpen: false,
        snackbarMessage: ''
    }

    componentDidMount = () => {
        database.ref('/JFDDL7/chat').on(
            'value',
            snapshot => this.setState({ messages: snapshot.val() })
        )
    }

    onNewMessageTextChange = (event) => {
        this.setState({ newMessageText: event.target.value })
    }

    onSendNewMessage = () => {
        const user = auth.currentUser

        const newMessage = {
            author: {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            },
            date: Date.now(),
            text: this.state.newMessageText
        }

        database.ref('/JFDDL7/chat').push(newMessage)
            .then(() => this.setState({
                newMessageText: '',
                isSackbarOpen: true,
                snackbarMessage: 'Wiadomość wysłana!'
            }))
    }

    onDeleteMessage = (id) => {
        database.ref(`/JFDDL7/chat/${id}`).remove()
    }

    componentWillUnmount = () => {
        database.ref('/JFDDL7/chat').off()
    }

    toggleFav = (message) => {
        const clickedMessageId = message.key
        const user = auth.currentUser.uid
        const ref = database.ref(`/JFDDL7/chat/${clickedMessageId}/isFav/${user}`)

        if (message.isFav && message.isFav[user]) {
            ref.remove()
        } else {
            ref.set(true)
        }
    }

    render() {
        return (
            <div>
                <MessageList
                    messages={this.state.messages}
                    onDeleteMessage={this.onDeleteMessage}
                    toggleFav={this.toggleFav}
                />
                <NewMessageForm
                    newMessageText={this.state.newMessageText}
                    onNewMessageTextChange={this.onNewMessageTextChange}
                    onSendNewMessage={this.onSendNewMessage}
                />
                <Snackbar
                    open={this.state.isSackbarOpen}
                    onClose={() => this.setState({ isSackbarOpen: false })}
                    autoHideDuration={2000}
                    message={this.state.snackbarMessage}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    TransitionComponent={Fade}
                />
            </div>
        )
    }
}

export default Chat
