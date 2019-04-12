import React, { Component } from 'react'
import MessageList from './MessageList'
import NewMessageList from './NewMessageList'

class Chat extends Component {
	state = {
		messages: null,
		newTextMessage: ''
	}

	render() {
		return (
			<div>
                <MessageList />
                <NewMessageList />
			</div>
		)
	}
}

export default Chat
