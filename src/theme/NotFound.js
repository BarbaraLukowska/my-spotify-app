import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <p>Page Not Found :(</p>
    <Link to="/">Return to Home Page</Link>
  </div>
);

export default NotFound;