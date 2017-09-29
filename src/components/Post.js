import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Post = ({ text, onClick }) => (
  <li>
    {text}
    <Button
      onClick={onClick}
      label='X'/>
  </li>
);

Post.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Post.defaultProps = {
  onClick: () => {},
};

export default Post;
