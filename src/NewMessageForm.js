import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

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
            <div>
                <FormControlLabel
                    control={
                        <Switch
                            checked={props.isFavFilterActive}
                            onChange={props.toggleFavFilterActive}
                        />
                    }
                    label={'Pokaż ulubione'}
                />
            </div>
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
                    value={props.newMessageText}
                    onChange={(event) => props.onNewMessageTextChange(event)}
                />
            </form>
        </Paper>
    )
}

export default NewMessageForm 