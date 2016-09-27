import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import Helmet from "react-helmet";
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import SiteSidebar from '../components/SiteSidebar';

const SiteIndex = (props) => {
  const pageLinks = [];

  // sort pages
  const sortedPages = sortBy(props.route.pages, (page) => { access(page, 'data.date'); }).reverse();

  sortedPages.forEach((page) => {
    if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
      const title = access(page, 'data.title') || page.path;
      const description = access(page, 'data.description');
      const datePublished = access(page, 'data.date');
      const category = access(page, 'data.category');

      pageLinks.push(
        <div className="blog-post">
          <time className="published" dateTime={moment(datePublished).format('MMMM D, YYYY')}>
            {moment(datePublished).format('MMMM D, YYYY')}
          </time>
          <span className="blog-category">{category}</span>
          <h2><Link style={{borderBottom: 'none'}} to={prefixLink(page.path)} > {title}</Link></h2>
          <p dangerouslySetInnerHTML={{__html: description}} />
          <span className="post-divider">&mdash; &mdash; &mdash; &mdash; &mdash; &mdash; &mdash; &mdash; &mdash; &mdash; &mdash; &mdash; &mdash; &mdash;</span>
        </div>
      );
    }
  });

  return (
    <div className="application">
      <Helmet title={config.siteTitle} />
      <div>
        <SiteSidebar {...props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              {pageLinks}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SiteIndex.propTypes = {
  route: React.PropTypes.object
};

export default SiteIndex;
