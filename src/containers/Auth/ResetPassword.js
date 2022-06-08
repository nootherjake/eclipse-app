import React, { useContext } from 'react';
import {
  Container, NavBar, TextField,
} from 'components';
import PropTypes from 'prop-types';
import { AuthContext } from 'contexts/AuthContext';
import FormContaienr from './FormContainer';

const ResetPassword = ({ navigation }) => {
  const { dispatch } = useContext(AuthContext);

  return (
    <Container asGradient>
      <NavBar
        onLeftIconPress={() => navigation.goBack()}
      />
      <FormContaienr
        title="Reset Password"
        subtitle="Enter your new password and confirm password to reset."
        buttonLabel="Reset Password"
        onSubmit={() => dispatch({ type: 'SIGN_IN' })}
      >
        <TextField label="Password" secureTextEntry />
        <TextField label="Confirm Password" secureTextEntry />
      </FormContaienr>
    </Container>
  );
};

ResetPassword.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ResetPassword;
