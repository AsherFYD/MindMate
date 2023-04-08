import React, { useState, useEffect, useRef } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer, ChatContainer, MessageList, MessageInput, Message, TypingIndicator} from "@chatscope/chat-ui-kit-react"

const ChatBox = ({messages, setMessages}) => {
	const [isTyping, setIsTyping] = useState(false)

	const msgListRef = useRef();
	const scrollToBottom = () => {
		msgListRef.current.scrollToBottom();
	}
	useEffect(() => {
		scrollToBottom()
	}, [messages])

	/**
	 * Async function that is called when a new message is sent by the user
	 */
	const handleSend = async (message) => {
		const newMessage = {
		  message,
		  direction: 'outgoing',
		  sender: "user"
		};
		const newMessages = [...messages, newMessage];
		localStorage.setItem("messages", JSON.stringify(newMessages)) // update in local storage
		setMessages(newMessages);
		setIsTyping(true);
		await processMessageToChatGPT(newMessages); // call async function that will call serverless function
	};

	/**
	 * Async function that called the serverless function to access LLM to get a response
	 * After receiving response, update the conversation in the webpage
	 */
	const processMessageToChatGPT = async (chatMessages) => {
		const responseStream = await fetch('/.netlify/functions/askGPT', {
			method: 'POST',
			body: JSON.stringify({ messages: chatMessages })
		})

		const responseJson = await responseStream.json()
		const reply = responseJson.response

	 	let newMessages = [...chatMessages, {
			message: reply,
			sender: "ChatGPT"
		}]
		localStorage.setItem("messages", JSON.stringify(newMessages)) // update in local storage
		setMessages(newMessages);
		setIsTyping(false);
	}

	return (
		<MainContainer>
		  <ChatContainer>       
			<MessageList 
			  ref={msgListRef}
			  scrollBehavior="auto" 
			  autoScrollToBottom= {true}
			  typingIndicator={isTyping ? <TypingIndicator content="MindMate is typing" /> : null}
			>
			  {messages.map((message, i) => {
				return <Message key={i} model={message} style={{textAlign: "left"}}/>
			  })}
			</MessageList>
			<MessageInput attachButton={false} placeholder="Type message here" onSend={handleSend} style={{textAlign: "left"}}/>        
		  </ChatContainer>
		</MainContainer>
	);
}

export default ChatBox