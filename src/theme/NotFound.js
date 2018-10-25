import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.sass';

const NotFound = () => (
  <div className="NotFound">
    <p>Page Not Found :(</p>
    <button>
      <Link to="/">Return to App</Link>
    </button>
  </div>
);

export default NotFound;
