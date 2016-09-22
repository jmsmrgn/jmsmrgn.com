import React from 'react';
import { config } from 'config';
import './style.css';
import '../../static/fonts/fontawesome/style.css';

const SiteLinks = () => {
  return (
    <div className="blog-social">
      <ul>
        <li><a href={config.siteEmailUrl}><i className="fa fa-envelope-o" /></a></li>
        <li><a href={config.siteTwitterUrl}><i className="fa fa-twitter" /></a></li>
        <li><a href={config.siteGithubUrl}><i className="fa fa-github-alt" /></a></li>
        <li><a href={config.siteCodePenUrl}><i className="fa fa-codepen" /></a></li>
        <li><a href={config.siteLinkedInUrl}><i className="fa fa-linkedin" /></a></li>
      </ul>
    </div>
  );
};

export default SiteLinks;
