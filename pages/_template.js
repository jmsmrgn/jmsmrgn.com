import React from 'react';

import '../static/css/reset.css';
import '../static/css/base.css';
import '../static/css/typography.css';

const Template = (props) => {
  const { children } = props;

  return (
    <div className="template">
      { children }
    </div>
  );
};

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
