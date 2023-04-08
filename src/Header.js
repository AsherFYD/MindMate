import catIcon from './cat-black-face.png';

const Header = () => {
	return (
		<header className="Header">
			<h1>MindMate</h1>
			<div className="cat-icon-container">
		        <img src={catIcon} alt="Cat icon" className="cat-icon" />
		    </div>
		</header>
	)
}

export default Header