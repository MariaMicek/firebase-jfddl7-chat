import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const styles = {
    paper: {
        position: 'fixed',
        bottom: 0,
        width: '100vw',
        boxSizing: 'border-box',
        padding: '15px 30px 15px 15px'
    }
}

const NewMessageForm = (props) => {
    return (
        <Paper
            style={styles.paper}        
        >
            <form
                onSubmit={event => {
                    event.preventDefault()
                    props.onSendNewMessage()
                }}
            >
                <TextField
                    fullWidth={true}
                    style={styles.input}
                    placeholder={'Wpisz swoją wiadomość'}
                    value={props.NewMessageText}
                    onChange={(event) => props.onNewMessageTextChange(event)}
                />
            </form>
        </Paper>
    )
}

export default NewMessageForm 