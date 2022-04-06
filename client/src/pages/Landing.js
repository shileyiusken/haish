import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				{/* info */}
				<div className='info'>
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Artisan kinfolk taxidermy, 3 wolf moon live-edge paleo echo park yuccie.
						Pabst everyday carry pickled squid, flannel celiac kogi copper mug wayfarers
						intelligentsia bushwick affogato.
					</p>
					<Link to='/register' className='btn btn-hero'>Login/Register</Link>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
}

export default Landing