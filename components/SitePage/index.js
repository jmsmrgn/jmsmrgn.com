import React from 'react';
import SiteSidebar from '../SiteSidebar';
import './style.css';

const SitePage = (props) => {
  const { route } = props;
  const post = route.page.data;

  return (
    <div className="wrapper">
      <SiteSidebar {...props} />
      <div className="content">
        <div className="main">
          <div className="main-inner">
            <div className="blog-page">
              <div className="text">
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.body}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SitePage.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
  route: React.PropTypes.object
};

export default SitePage;
