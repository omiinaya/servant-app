import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const Auth = (props) => {
  return (
    <Form>
      <FormGroup>
        <Input type="email" name="email" id="email" placeholder="Email / Username" />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" id="password" placeholder="Password" />
      </FormGroup>
      <Button size="lg" block>Continue</Button>
    </Form>
  );
}

export default Auth;