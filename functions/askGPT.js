exports.handler = async function(event, context) {
	const apiKey = process.env.API_KEY
	const systemPrompt = process.env.SYSTEM_PROMPT
	const systemMessage = {
	  "role": "system", 
	  "content": systemPrompt
	}
	const reminderMessage = process.env.REMINDER_MESSAGE
	const eventBody = JSON.parse(event.body)
	let chatMessages = eventBody.messages

	let apiMessages = chatMessages.map((messageObject) => {
	  let role = "";
	  if (messageObject.sender === "ChatGPT") {
		role = "assistant";
	  } else {
		role = "user";
	  }
	  return { role: role, content: messageObject.message}
	});

	let temp = apiMessages[apiMessages.length - 1]["content"] 
	apiMessages[apiMessages.length - 1]["content"] = 
	`${reminderMessage}
	
	${temp}`

	// Get the request body set up with the model we plan to use
	// and the messages which we formatted above. We add a system message in the front to'
	// determine how we want chatGPT to act. 
	const apiRequestBody = {
	  "model": "gpt-3.5-turbo",
	  "messages": [
		systemMessage,  // The system message DEFINES the logic of our chatGPT
		...apiMessages // The messages from our chat with ChatGPT
	  ]
	}

	// maybe use axios?
	try{
		const reply = await fetch("https://api.openai.com/v1/chat/completions",
		{
		  method: "POST",
		  headers: {
			"Authorization": "Bearer " + apiKey,
			"Content-Type": "application/json"
		  },
		  body: JSON.stringify(apiRequestBody)
		}).then((data) => {
			return data.json();
		}).then((data) => {
			return data.choices[0].message.content
		})
	
		return {
			statusCode: 200,
			body: JSON.stringify({response: reply})
		}
	} catch (err){
		return { statusCode: 422, body: err.stack}
	}

}