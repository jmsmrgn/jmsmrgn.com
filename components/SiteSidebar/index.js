import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import SiteNav from '../SiteNav';
import SiteLinks from '../SiteLinks';
import './style.css';
import profilePic from '../../pages/photo.png';

const SiteSidebar = (props) => {
  const { location } = props;
  const isHome = location.pathname === prefixLink('/');

  return (
    <div className='sidebar'>
      <div className='sidebar-inner'>
        <div className='blog-details'>
          <header>
            <Link style={{ textDecoration: 'none', borderBottom: 'none', outline: 'none' }} to={prefixLink('/')}>
              <img src={prefixLink(profilePic)} width='75' height='75' alt='' />
            </Link>
            { isHome ? (
              <h1><Link style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }} to={prefixLink('/')}> { config.siteAuthor } </Link></h1>
              ) :
              <h2><Link style={{ textDecoration: 'none', borderBottom: 'none', color: 'inherit' }} to={prefixLink('/')}> { config.siteAuthor } </Link></h2>
            }
            <p>
              { config.siteDescr }<br />
              SF, CA
            </p>
          </header>
        </div>
        <div className='blog-options'>
          <SiteNav {...props} />
          <footer>
            <SiteLinks {...props} />
            <p className='copyright'>
              &copy;2016 James Morgan
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

SiteSidebar.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object
};

export default SiteSidebar;
