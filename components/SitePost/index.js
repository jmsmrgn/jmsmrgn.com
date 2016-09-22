import React from 'react';
import moment from 'moment';
import { config } from 'config';
import ReadNext from '../ReadNext';
import SiteSidebar from '../SiteSidebar';
import './style.css';
import '../../static/css/highlight.css';

const SitePost = (props) => {
  const { route } = props;
  const post = route.page.data;

  console.log(post)

  return (
    <div>
      {/* <div>
        <Link className='gohome' to={prefixLink('/')}>All Articles</Link>
      </div> */}
      <SiteSidebar {...props} />
      <div className="blog-single">
        <div className="text">
          <h1>{ post.title }</h1>
          <div dangerouslySetInnerHTML={{__html: post.body}} />
          <hr />
          <div className="date-published">
            <em>Published {moment(post.datePublished).format('D MMM YYYY')}</em>
            <br />
            <a href={config.siteTwitterUrl}>
              @{config.siteUsername}
            </a>
          </div>
        </div>
        <div className="footer">
          <ReadNext post={post} pages={route.pages} />
        </div>
      </div>
    </div>
  );
};

SitePost.propTypes = {
  post: React.PropTypes.object,
  route: React.PropTypes.object
};

export default SitePost;
