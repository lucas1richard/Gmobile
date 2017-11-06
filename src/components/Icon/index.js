/**
*
* Icon
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from 'react-native-svg-icon';
import iftheme from 'theme/iftheme';

import icons from './icons';

const Icon = ({ name, fill, style, ...props }) => {
  thmFill = iftheme[fill] || iftheme.green;
  return (<SvgIcon {...props} name={name} fill={thmFill} {...props} svgs={icons} />);
};

export default Icon; 

Icon.propTypes = {
  fill: PropTypes.string,
  name: PropTypes.string.isRequired,
  props: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  fill: iftheme.green,
  viewBox: "0 0 50 50"
};
