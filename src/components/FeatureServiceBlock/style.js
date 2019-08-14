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
  
  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  margin: 15px;
  padding: 0px;
  height: auto;

  .icon_container {
    height: 200px;
    background: #5166DA !important;
    padding: 0px;
    border-radius: 6px 6px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      color: white;
      font-size: 16px;
    }
  }
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
  margin-top: 24px;
`;

// Content wrapper style
const ContentWrapper = styled.div`
  ${width}
  ${space}
  ${textAlign}  
  padding: 24px 32px !important;

  .content__desc {
    height: 120px;
    overflow: hidden;
  }

  h1 {
    font-weight: 600;
    color: #0f2137;
  }

  p {
    font-size: 14px;
  }

  .content__time {
    color: #5166DA;
  }

  .start_button {
    width: 100%;
    font-size: 14px;
  }
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
