const ChatHeader = ({messages}) => {
	return (
		<div className="ChatHeader">
			{messages.length ? (
				<div></div>
			):<div>Send a message to start a conversation with MindMate</div>}
		</div>
	)
}

ChatHeader.defaultProps = {
	messages: []
}

export default ChatHeader