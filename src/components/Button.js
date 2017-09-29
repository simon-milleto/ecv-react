import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  static propTypes = {
    classStyle: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    classStyle: '',
    onClick: () => {},
    type: 'button',
    label: 'Button',
  };

  render() {
    const { classStyle, onClick, type, label } = this.props;
    return (
      <button
        className={classStyle}
        onClick={onClick}
        type={type}>
        {label}
      </button>
    );
  }
}

export default Button;
