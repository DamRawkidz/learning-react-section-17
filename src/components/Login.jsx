import { useRef } from "react";
import { useState } from "react";

export default function Login() {

  const [emailisInvalid, setEmialIsInvalid] = useState()

  const email = useRef()
  const password = useRef()


  const [enterValues, setEnterValues] = useState({
    email: '',
    password: ''
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }

  const emailIsInvalid = didEdit.email && !enterValues.email.includes('@')


  function handleInputChange(identifier, value) {
    setEnterValues(prev => ({
      ...prev,
      [identifier]: value
    }))

    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }




  function handleSubmit(event) {
    event.preventDefault();
    console.log(enterValues)

    const enterdeEmail = email.current.value;
    const enteredPasssword = password.current.value

    const emailIsValid = enterdeEmail.includes('@')
    if (!emailIsValid) {
      setEmialIsInvalid(true)
      return
    }

    console.log('sending http ')
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enterValues.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={enterValues.password} onChange={(event) => handleInputChange('password', event.target.value)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
