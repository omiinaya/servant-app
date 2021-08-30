import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const Register = () => {
  return (
    <Form>
      <FormGroup>
        <Input type="username" name="username" id="username" placeholder="Email / Username" />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" id="password" placeholder="Password" />
      </FormGroup>
      <Button size="lg" block>Continue</Button>
    </Form>
  );
}

export default Register;