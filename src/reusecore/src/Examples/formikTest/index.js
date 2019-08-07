import React, { Fragment } from 'react';
import { Formik, Field } from 'formik';
import ErrorMessageComponent from './errorMessage';
import {
  validateFunc,
  onSubmitFunc,
  DisplayFormikState
} from './helperFunctions';
import Button from '../../elements/Button/index';
import RadioBox from '../../elements/Radio/index';
import Select from '../../elements/Select/index';
import { initialValues, data } from './data';

const RadioButton = ({
  field: { name, value, onChange, onBlur, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <Fragment>
      <RadioBox
        name={name}
        id={id}
        value={id} // could be something else for output?
        checked={id === value}
        labelText={label}
        onChange={onChange}
        onBlur={onBlur}
        className="radio-button"
        {...props}
      />
    </Fragment>
  );
};

const RadioGroupWithFormik = ({
  value,
  error,
  touched,
  id,
  label,
  children
}) => {
  return (
    <div>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && error && <ErrorMessageComponent error={error} />}
      </fieldset>
    </div>
  );
};

const FormikTest = () => {
  // render component
  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        validate={validateFunc}
        onSubmit={onSubmitFunc}
      >
        {props => {
          const {
            values,
            errors,
            touched,
            dirty,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            handleReset,
            setFieldValue,
            setFieldTouched
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <ErrorMessageComponent error={errors.email} />
                ) : (
                  ''
                )}
              </div>
              <br />
              <div>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <ErrorMessageComponent error={errors.password} />
                ) : (
                  ''
                )}
              </div>
              <br />
              <RadioGroupWithFormik
                id="gender"
                label="Choose One of these please!"
                value={values.gender}
                error={errors.gender}
                touched={touched.gender}
                onChange={value => setFieldValue('gender', value)}
                onBlur={() => setFieldTouched('gender', true)}
              >
                {data.gender
                  ? data.gender.map((single, index) => {
                      return (
                        <Field
                          key={index}
                          component={RadioButton}
                          name="gender"
                          id={single.value}
                          value={single.value}
                          label={single.label}
                        />
                      );
                    })
                  : ''}
                {errors.gender && touched.gender ? (
                  <ErrorMessageComponent error={errors.gender} />
                ) : (
                  ''
                )}
              </RadioGroupWithFormik>
              <br />
              <div>
                <Select
                  id="profession"
                  type="select"
                  options={data.profession}
                  value={values.profession}
                  error={errors.profession}
                  touched={touched.profession}
                  onChange={value => setFieldValue('profession', value)}
                  onBlur={() => setFieldTouched('profession', true)}
                />
                {errors.profession && touched.profession ? (
                  <ErrorMessageComponent error={errors.profession} />
                ) : (
                  ''
                )}
              </div>
              <br />
              <Fragment>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  title="Submit Form"
                  colors="primary"
                  variant="outlined"
                />
              </Fragment>
              <br />
              <Fragment>
                <Button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                  title="Reset"
                  colors="primaryWithBg"
                  varient="textButton"
                />
              </Fragment>
              <DisplayFormikState {...props} />
            </form>
          );
        }}
      </Formik>
    </Fragment>
  );
};

export default FormikTest;
