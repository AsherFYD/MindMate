const Footer = ({setMessages}) => {

	const handleReset = () => {
		setMessages([]) // set messages to empty array
		localStorage.removeItem("messages")// remove from local storage
	}

	return (
		<div className="Footer">
			<button
				onClick={handleReset}>
				Restart conversation
			</button>
		</div>
	)
}

export default Footer