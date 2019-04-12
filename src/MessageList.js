import React from 'react'
import Message from './Message'
import List from '@material-ui/core/List'
import { auth } from './firebaseConfig'

const MessageList = (props) => {
    const messagesArray = (
        Object.entries(props.messages || {})
            .map(
                ([key, value]) => (
                    {
                        ...value,
                        key
                    }
                )
            )
    )

    const filteredMessages = messagesArray.filter(
        message => message.isFav && message.isFav[auth.currentUser.uid]
    )

    return (
        <List>
            {
                messagesArray.map(
                    message => (
                        <Message
                            key={message.key}
                            message={message}
                            onDeleteMessage={props.onDeleteMessage}
                            toggleFav={props.toggleFav}
                        />
                    )
                ).reverse()
            }
        </List>
    )
}

export default MessageList 