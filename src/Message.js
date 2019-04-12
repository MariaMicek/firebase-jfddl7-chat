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
import Tooltip from '@material-ui/core/Tooltip'
import moment from 'moment'
import 'moment/locale/pl'
import { auth } from './firebaseConfig'

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
                primary={
                    <div>
                        <span>
                            {props.message.author.displayName} {' '}
                        </span>
                        <Tooltip
                        title={moment(props.message.date).format('lll')}
                        >
                        <span style={{fontSize: 'small', color: 'grey'}}>
                            {moment(props.message.date).fromNow()}
                        </span>
                        </Tooltip>
                    </div>
                }
                secondary={props.message.text}
            />
            <ListItemSecondaryAction>
                <IconButton
                    aria-label={'Comments'}
                    onClick={() => props.toggleFav(props.message)}
                >
                    {
                        props.message.isFav && props.message.isFav[auth.currentUser.uid] ?
                            <Star />
                            :
                            <StarBorder />
                    }
                </IconButton>
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