import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import './createAccount.css'

const SignupPage = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })


  useEffect(() => {})

  const fields = [
    {
      label: 'Username',
      id: 'username',
      dataId: 'username-field',
      type: 'text',
    },
    { label: 'Email', id: 'email', dataId: 'email-field', type: 'text' },
    {
      label: 'password',
      id: 'password',
      dataId: 'password-field',
      type: 'password',
    },
  ]
  return (
    <div className="signup-page-container">
      <Form>
        {fields.map((field, index) => {
          return (
            <Form.Input
              // error={
              //   showEmptyFieldErrors == true && inputs[field.id] == '' ? (
              //     `${field.label} is empty`
              //   ) : null
              // }
              className="text-field"
              placeholder={field.label}
              label={field.label}
              value={inputs[field.id]}
              data-test={field.dataId}
              onChange={(e)=> setInputs(e.target.value)}
              type={field.type}
              key={index}
            />
          )
        })}
        <div className="button-container">
          <Button
            id="submit-btn"
            style={{
              backgroundColor: '#7504e2',
              color: 'white',
              width: '340px',
            }}
          >
            Register
          </Button>
        </div>
        <div style={{ marginTop: '3%' }}>
          Already have an account ?{' '}
          <a href='/' style={{ color: '#7504e2', marginLeft: '10px' }}>Login here</a>
        </div>

        <div />
      </Form>
    </div>
  )
}

export default SignupPage
