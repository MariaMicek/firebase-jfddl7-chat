import React from 'react'
import Message from './Message'
import List from '@material-ui/core/List'
import { auth } from './firebaseConfig'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

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

    const messagesToShow = (
        props.isFavFilterActive ?
            filteredMessages
            :
            messagesArray
    )

    return (
        <div>
            <Paper style={{ padding: '10px', display: 'flex', justifyContent: 'flex-end'}}>
                <Button
                    variant={'contained'}
                    color={'secondary'}
                    onClick={props.onLogOutClick}
                >
                    WYLOGUJ
                </Button>
            </Paper>
            <List style={{marginBottom: '110px'}}>
                {
                    messagesToShow.map(
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
        </div>
    )
}

export default MessageList 