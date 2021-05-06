import React from "react";
import {
    FormContainer,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    Text,
    FormButton
} from './SigninElement'

const Signin = () => {
  return (
    <>
      <FormContainer>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" requited />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" requited />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </FormContainer>
    </>
  );
};

export default Signin;
