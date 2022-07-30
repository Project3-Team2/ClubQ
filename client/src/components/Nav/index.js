import React from 'react';
import { Link } from "react-router-dom";

import Auth from '../../utils/auth';



function Nav() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
    
    const loggedIn = Auth.loggedIn();
    console.log(loggedIn);

    return (
        <nav style={{ display:'inline-flex', backgroundColor:'#D9594C', position: 'relative', top: 0, width: '100%', height:'56px' , alignContent:'center'}}>
            <div style={{ display:'inline-flex'}}>
<<<<<<< HEAD
                <Link to="/" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> Home </Link>
                {/* <Link to="/LandingPage" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> Landing </Link> */}
                <Link to="/Queue" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> Check Your Queue </Link>
                { Auth.loggedIn() ? (<a href="/" onClick={logout} style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> Logout </a>) : (<Link to="/LogInPage" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> LogIn</Link>)}
                {loggedIn && (<Link to="/QuePage" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> View Queue</Link>)}
                {loggedIn && (<Link to="/AdminPage" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> Admin Page</Link>)}
=======
                <Link to="/" style={{ textDecoration: 'none', color:'white',float:'left', padding:'20px', fontWeight:'bold', textAlign:'center'}}> Home </Link>
                <Link to="/LandingPage" style={{ textDecoration: 'none', color:'white', display:'block', padding:'20px', fontWeight:'bold', textAlign:'center'}}> Queue Status </Link>
                {loggedIn && (<Link to="/EditQueue" style={{ textDecoration: 'none' ,float:'left', color:'white', display:'block', padding:'20px', fontWeight:'bold', textAlign:'center'}}> Edit Queue </Link>)}
                { Auth.loggedIn() ? (<a href="/" onClick={logout} style={{ textDecoration: 'none',float:'right' , color:'white', display:'block', padding:'20px', fontWeight:'bold', textAlign:'center'}}> Logout </a>) : (<Link to="/LogInPage" style={{ textDecoration: 'none', color:'white', display:'block', float:'left', padding:'20px', fontWeight:'bold', textAlign:'center'}}>Manager LogIn</Link>)}
                {loggedIn && (<Link to="/QuePage" style={{ textDecoration: 'none' ,float:'right',color:'white', display:'block', padding:'20px', fontWeight:'bold', textAlign:'center'}}> View Queue History</Link>)}
                {loggedIn && (<Link to="/AdminPage" style={{ textDecoration: 'none',float:'right', color:'white', display:'block', padding:'20px', fontWeight:'bold', textAlign:'center'}}> Admin Page</Link>)}
>>>>>>> 3cbe4bf8457d9bd06d6f779751d59c2379bfc104
    
                {/* <Link to="/ForgetPasswordPage" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> Forgot Password</Link> */}
            </div>
        </nav>
    );
  }
  
  export default Nav;
  