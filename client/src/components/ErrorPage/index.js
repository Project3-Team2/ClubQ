import React from 'react';

function ErrorPage(props) {
      return (
        <div >
          <div >
            <h1>Oops 404!</h1>
            <h3>Looks like you entered wrong information.</h3>
            <div >
              <div>
                <button
                  onClick={() => {
                    window.location.href = '/';
                  }}
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
          <div>
            <img src="/images/error404.svg" alt="Error 404" />
          </div>
        </div>
      );
   
  }
  
  export default ErrorPage;