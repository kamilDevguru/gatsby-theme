import React from 'react';
import ContainerWrapper from './style';

const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width,
  id,
}) => {
  // Add all classs to an array
  const addAllClasses = ['container'];
  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ContainerWrapper
      id={id}
      className={addAllClasses.join(' ')}
      fullWidth={fullWidth}
      noGutter={noGutter}
      width={width}
      mobileGutter={mobileGutter}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
