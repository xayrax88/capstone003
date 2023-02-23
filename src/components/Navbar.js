import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../Firebase/Firebase";

import './Navbar.scss';


function Navbar(props) {
  const [isConnected, setIsConnected] = useState(true)
  const [user, loading] = useAuthState(auth);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    setIsConnected("user_credentials" in localStorage)
  }, [])

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            [M]EMORIA <i className='fa-solid fa-feather' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {
            !user ?
              (
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>

                    <Link
                      to='/login'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Login
                    </Link>

                  </li>
                  <li>
                    <Link
                      to='/sign-up'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>

                    <Link
                      to='/dashboard'
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Posts
                    </Link>

                  </li>
                  <li>
                    <Link
                      to='/login'
                      className='nav-links'
                      onClick={logout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>)
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;