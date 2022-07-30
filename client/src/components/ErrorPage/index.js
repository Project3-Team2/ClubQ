import React from 'react';
import Footer from "../Footer";

function ErrorPage(props) {
      return (
        <div >
          <div >
            <h1>Oops 404!</h1>
            <h3>Looks like you entered wrong information.</h3>
            <div >
              <div>
                <button
                  onClick={(event) => {
                    event.preventDefault()
                    window.location.href = '/'
                  }}
                  style={{marginBottom:'20px'}}
                >
                  Return home
                </button>
              </div>
              <div>
                <a
                  href="https://github.com/Project3-Team2/ClubQ/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button outlined>Report a bug</button>
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
   
  }
  
  export default ErrorPage;