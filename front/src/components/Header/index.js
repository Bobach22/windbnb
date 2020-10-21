import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const Header = () => {
  return (
    <div className="sm:my-10">
      <div className="flex sm:flex-row flex-col items-center">
        <Link to="/" className="mr-auto sm:my-0 my-10">
          <img className="w-auto h-6" src="/logo.svg" />
        </Link>

        <Form />
      </div>
    </div>
  );
};

export default Header;
