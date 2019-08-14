import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import Button from '../../reusecore/src/elements/Button';

import FeatureBlockWrapper, {
  IconWrapper,
  ContentWrapper,
} from './style.js';

const FeatureBlock = ({
  className,
  icon,
  field,
  itemNumber,
  time,
  buttonInfo,
  title,
  description,
  iconPosition,
  additionalContent,
  wrapperStyle,
  contentStyle,
  btnWrapperStyle,
  buttonStyle,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['feature__block'];

  // Add icon position class
  if (iconPosition) {
    addAllClasses.push(`icon_${iconPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // check icon value and add
  const Icon = icon && (
    <IconWrapper
      className="icon__wrapper"
      width='96px' 
      height='50%'
    >
      {icon}
    </IconWrapper>
  );

  return (
    <FeatureBlockWrapper
      className={addAllClasses.join(' ')}
      {...wrapperStyle}
      {...props}
    >
      <div className="icon_container">
        {Icon}
        <p>{field}</p>
      </div>

      {title || description ? (
        <Fragment>
          <ContentWrapper className="content__wrapper" {...contentStyle}>
            <div className="content__desc">
              {title}
              {description}
            </div>
            {itemNumber && (
              <p>{`${itemNumber} items`}</p>
            )}
            {time && (
              <p className="content__time">{time}</p>
            )}
            {buttonInfo && (              
              <Button
                title={buttonInfo.caption}
                className="start_button"
                onClick={() => navigate(buttonInfo.link)}
                {...buttonStyle}
              />
            )}
          </ContentWrapper>
          {additionalContent}
        </Fragment>
      ) : (
        ''
      )}
    </FeatureBlockWrapper>
  );
};

FeatureBlock.propTypes = {
  /** ClassName of the FeatureBlock */
  className: PropTypes.string,

  /** title prop contain a react component. You can use our Heading component from reusecore */
  title: PropTypes.element,

  /** description prop contain a react component. You can use our Text component from reusecore */
  description: PropTypes.element,

  /** Set icon position of the FeatureBlock */
  iconPosition: PropTypes.oneOf(['top', 'left', 'right']),

  /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
   * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
  wrapperStyle: PropTypes.object,

  /** contentStyle prop contain these style system props: width, textAlign and space. */
  contentStyle: PropTypes.object,

  /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
   * flexDirection and justifyContent. */
  btnWrapperStyle: PropTypes.object,
};

FeatureBlock.defaultProps = {
  iconPosition: 'top',
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primary',
    width: '222px',
    maxWidth: '100%',
  },
};

export default FeatureBlock;
