import React from 'react';
import { Form } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import './login.css';

const forgotPasswordStye = {
  marginTop: '10px',
  cursor: 'pointer',
  color: '#7504e2'

}

const LoginPage = (props) => {
  // const [inputs, setInputs] = useState({ email: '', password: '' });

  const fields = [
    { label: 'Email', id: 'email', dataId: 'email-field', type: 'text' },
    { label: 'password', id: 'password', dataId: 'password-field', type: 'password' }
  ];
  return (
    <div className="login-page-container">
      <Form>
        {fields.map((field, index) => {
          return (
            <Form.Input

              className="text-field"
              placeholder={field.label}
              label={field.label}
              // value={inputs[field.id]}
              // onChange={()}
              data-test={field.dataId}
              type={field.type}
              // showEmptyFieldErrors={showEmptyFieldErrors}
              key={index}
            />
          );
        })}

        <div style={forgotPasswordStye} >
          Forgot password ?
        </div>

        <div className="button-container">
          <Button id="submit-btn" style={{ backgroundColor: '#7504e2', color: 'white', width: '340px' }}>
              Login
            </Button>
        </div>

        <div style={{ marginTop: '15px' }}>
          Don't have an account ?{' '}
          <a href='/' style={{ color: '#7504e2', marginLeft: '10px' }}>
            Register!
          </a>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
