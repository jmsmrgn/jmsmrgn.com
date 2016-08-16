import React from 'react';
import moment from 'moment';
import { RouteHandler, Link } from 'react-router';
// import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
// import access from 'safe-access';
import { config } from 'config';
import ReadNext from '../ReadNext';
import './style.css';
import '../../static/css/highlight.css';

class SitePost extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <div>
          <Link className='gohome' to={prefixLink('/')}>All Articles</Link>
        </div>
        <div className='blog-single'>
          <div className='text'>
            <h1>{ post.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <hr />
            <div className='date-published'>
              <em>Published { moment(post.datePublished).format('D MMM YYYY') }</em>
              <br />
              <a href={config.siteTwitterUrl}>
                @{config.siteUsername}
              </a>
            </div>
          </div>
          <div className='footer'>
            <ReadNext post={post} {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

SitePost.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
  route: React.PropTypes.object
};

export default SitePost;
