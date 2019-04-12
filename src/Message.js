import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'
import Delete from '@material-ui/icons/Delete'
import moment from 'moment'
import 'moment/locale/pl'

moment.locale('pl')

const Message = (props) => {
    return (
        <ListItem
            alignItems={'flex-start'}
        >
            <ListItemAvatar>
                <Avatar
                    alt={props.message.author.displayName}
                    src={props.message.author.photoURL}
                />
            </ListItemAvatar>
            <ListItemText
                primary={props.message.author.displayName + ' | ' + moment(props.message.date).fromNow()}
                secondary={props.message.text}
            />
            <ListItemSecondaryAction>
                {/* <IconButton
                    aria-label={'Comments'}
                >
                    <Star />
                    <StarBorder />
                </IconButton> */}
                <IconButton
                    aria-label={'Comments'}
                    onClick={() => props.onDeleteMessage(props.message.key)}
                >
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Message