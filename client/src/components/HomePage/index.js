import React from "react";
import "../../App.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';
import clubVideo from '../../assets/Club_Scene_Blur.mov'


const HomePage = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }



  const handleClick = event => {
    event.currentTarget.classList.toggle('active');

  };

  const loggedIn = Auth.loggedIn();


  return(

  <div>
  <section className="showcase"  onClick={ handleClick}>
      <header>
        <h2 className="logo">ClubQ</h2>
        <div className="toggle"  onClick={handleClick}></div>
      </header>
      <video src={clubVideo} muted loop autoPlay></video>
      <div className="overlay"></div>
      <div className="text">
        <h2>Welcome to ClubQ </h2> 
        <h5>Checkout the queue status from the menu</h5>
      </div>
      <ul className="social">
        <li><a target="_blank"
              rel="noreferrer"
              href="https://github.com/Project3-Team2/ClubQ/tree/main"
              className="social-icon"><FaGithub size={42} color={'black'}/></a></li>
        <li><a target="_blank"
              rel="noreferrer"
              href="https://twitter.com/"
              className="social-icon"><FaTwitter size={42} color={'black'}/></a></li>
      </ul>
    </section>
    <div className="menu">
      <ul>
        {/* <li> <Link to="/" > Home </Link> </li> */}
        <li><Link to="/LandingPage" > Queue Status </Link></li>
        <li>{loggedIn && (<Link to="/EditQueue" > Edit Queue </Link>)}</li>
        <li>{ Auth.loggedIn() ? (<a href="/" onClick={logout} > Logout </a>) : (<Link to="/LogInPage">Manager LogIn</Link>)}</li>
        <li>{loggedIn && (<Link to="/QuePage"> View Queue History</Link>)}</li>
        <li>{loggedIn && (<Link to="/AdminPage"> Admin Page</Link>)}</li>
      </ul>
    </div>
    </div>

  )
};

export default HomePage;
