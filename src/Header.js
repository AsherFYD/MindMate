import catIcon from './cat-black-face.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="Header">
			<div className='HeaderComponents'>
				<div className="cat-icon-container">
			        <img src={catIcon} alt="Cat icon" className="cat-icon" />
			    </div>
				<h1>MindMate</h1>
			</div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/resources">Mental Health Resources</Link></li>
			</ul>
		</header>
	)
}

export default Header