import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const styles = {
    input: {
        position: 'fixed',
        bottom: 0,
        width: '100vw',
        padding: '15px',
        boxSizing: 'border-box'
    }
}

const NewMessageForm = (props) => {
    return (
        <Paper
            style={styles.input}        
        >
            <form
                onSubmit={event => {
                    event.preventDefault()
                    props.onSendNewMessage()
                }}
            >
                <TextField
                    fullWidth={true}
                    placeholder={'Wpisz swoją wiadomość'}
                    value={props.NewMessageText}
                    onChange={(event) => props.onNewMessageTextChange(event)}
                />
            </form>
        </Paper>
    )
}

export default NewMessageForm 