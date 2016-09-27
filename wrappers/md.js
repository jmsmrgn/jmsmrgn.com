import React from 'react';
import Helmet from 'react-helmet';
import SitePost from '../components/SitePost';
import SitePage from '../components/SitePage';
import { config } from 'config';

const MarkdownWrapper = (props) => {
  const { route } = props;
  const post = route.page.data;
  const layout = post.layout;
  let template;

  if (layout !== 'page') {
    template = <SitePost {...props} />;
  } else {
    template = <SitePage {...props} />;
  }

  return (
    <div>
      <Helmet title={`${post.title} - ${config.siteTitle}`} />
      <div>
        {template}
      </div>
    </div>
  );
};

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
};

export default MarkdownWrapper;
