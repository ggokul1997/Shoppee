import React from 'react';
import '../ErrorPage.css'; 
import {Link} from 'react-router-dom'


const ErrorPage = () => {
 

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn't find the page you were looking for.</p>
      <Link to="/" style={{color:"whitesmoke"}}><button>Go to Home</button></Link> 
    </div>
  );
};

export default ErrorPage;
