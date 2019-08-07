import React, { Fragment } from 'react';
import Alert from '../../elements/Alert/index';

const ErrorMessageComponent = props => {
  const { error } = props;
  return (
    <Fragment>
      <Alert className="error" colors="error">
        {error}
      </Alert>
    </Fragment>
  );
};

export default ErrorMessageComponent;
