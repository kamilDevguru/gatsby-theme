import styled from 'styled-components';
import {
  color,
  width,
  height,
  display,
  space,
  borders,
  borderColor,
  boxShadow,
  borderRadius,
  flexWrap,
  alignItems,
  justifyContent,
  flexDirection,
  position,
  overflow,
  fontSize,
  textAlign,
} from 'styled-system';

// FeatureBlock wrapper style
const FeatureBlockWrapper = styled.div`
  &.icon_left {
    display: flex;
    .icon__wrapper{
      flex-shrink: 0;
    }
  }
  &.icon_right {
    display: flex;
    flex-direction: row-reverse;
    .content__wrapper {
      text-align: right;
    }
    .icon__wrapper{
      flex-shrink: 0;
    }
  }

  /* styled system prop support */
  ${display}
  ${width}
  ${height}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${borderRadius}
  ${overflow}

  //
  
  max-width: 360px;
  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  margin: auto 15px;
  padding: 0px;
`;

// Icon wrapper style
const IconWrapper = styled.div`
  ${display}
  ${width}
  ${height}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${borderRadius}
  ${overflow}
  ${fontSize}
  height: 200px;
  background: #5166DA !important;
  padding: 0px;
  border-radius: 6px 6px 0 0;

  div {
    width: 108px;
    height: 83px;
  }
`;

// Content wrapper style
const ContentWrapper = styled.div`
  ${width}
  ${space}
  ${textAlign}
`;

// Button wrapper style
const ButtonWrapper = styled.div`
  ${display}
  ${space}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}
`;

export { IconWrapper, ContentWrapper, ButtonWrapper };
export default FeatureBlockWrapper;
