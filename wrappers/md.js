import React from 'react';
import DocumentTitle from 'react-document-title';
import SitePost from '../components/SitePost';
import SitePage from '../components/SitePage';
import { config } from 'config';

const MarkdownWrapper = (props) => {
  const { route } = props;
  const post = route.page.data;
  let layout, template;

  layout = post.layout;

  if (layout !== 'page') {
    template = <SitePost {...props} />;
  } else {
    template = <SitePage {...props} />;
  }

  return (
    <DocumentTitle title={`${post.title} - ${config.siteTitle}`}>
      <div>
        { template }
      </div>
    </DocumentTitle>
  );
};

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
};

export default MarkdownWrapper;
