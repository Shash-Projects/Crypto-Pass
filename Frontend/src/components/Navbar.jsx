import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import {useNavigate } from 'react-router-dom';
import '../styles/nft-nav.css';

function Navbar({account}) {
  const navigate = useNavigate();

  return (
    <nav>
      <img id="nav-logo" src={logo} alt="Logo" onClick={()=>navigate('/')}/>
      <div className="nav-right-button">
        <p>Account: {account}</p>
        <Link to="/create-event"><button >Create Event</button></Link>
        <Link to="/sign-in"><button>Connect Wallet</button></Link>
        <Link to="/user"><button>Profile</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;