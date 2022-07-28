import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";


function Nav() {

  
    return (
        <nav style={{ display:'inline-flex', backgroundColor:'#D9594C', position: 'relative', top: 0, width: '100%', height:'36px' , alignContent:'center'}}>
            <div style={{ display:'inline-flex'}}>
                <Link to="/" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> Home </Link>
                {/* <Link to="/LandingPage" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> Landing </Link> */}
                <Link to="/RegisterPage" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> Register </Link>
                <Link to="/LogInPage" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> LogIn</Link>
                <Link to="/QuePage" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> View Queue</Link>
                {/* <Link to="/ForgetPasswordPage" style={{ textDecoration: 'none', color:'Black', display:'block', padding:'15px', fontWeight:'bold', textAlign:'center'}}> Forgot Password</Link> */}
            </div>
        </nav>
    );
  }
  
  export default Nav;
  