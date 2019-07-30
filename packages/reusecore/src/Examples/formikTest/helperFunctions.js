import React from 'react';

export const validateFunc = values => {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email Required!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password Required!';
  }
  if (!values.gender) {
    errors.gender = 'Gender Required!';
  }
  if (!values.profession) {
    errors.profession = 'Profession Required!';
  }
  return errors;
};

export const onSubmitFunc = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

export const DisplayFormikState = props => (
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '14px',
        padding: '10px'
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);
