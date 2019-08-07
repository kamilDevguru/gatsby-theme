import styled from 'styled-components';
import { variant } from 'styled-system';
import { colorStyle } from '../../theme/customVariant';
import { AnimSpinner } from '../Animation';
import { base } from '../base';

const LoaderStyle = styled.span`
  /* loader default style */
  display: inline-flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => (props.loaderColor ? props.loaderColor : '#000000')};
  border-top-color: transparent !important;

  /* animation goes here */
  ${AnimSpinner}
  /* Style system custome color variant */
  ${colorStyle}
  ${base}
`;

// prop types can also be added from the style functions
LoaderStyle.propTypes = {
  ...variant.propTypes
};

LoaderStyle.displayName = 'LoaderStyle';

export default LoaderStyle;
