import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './style.css';

const SiteNav = (props) => {
  const { location } = props;

  return (
    <nav className='blog-nav'>
      <ul>
        <li>
          <Link to='/' className={location.pathname === prefixLink('/') ? 'current' : null}> Articles
          </Link>
        </li>
        <li>
          <Link to='/about' className={location.pathname === prefixLink('/about') ? 'current' : null}> About
          </Link>
        </li>
        <li>
          <Link to='/contact' className={location.pathname === prefixLink('/contact') ? 'current' : null}> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

SiteNav.propTypes = {
  location: React.PropTypes.object
};

export default SiteNav;
