import { useRef } from "react";
import { useInput } from '../hooks/userInput.js'
import Input from "./Input.jsx"
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js'
export default function Login() {
  const { value: emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError: emailHasError } = useInput('', (value) => isEmail(value) && isNotEmpty(value))
  const { value: passwordVale, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, hasError: passwordHasError } = useInput('', (value) => hasMinLength(value, 6))

  // const [emailisInvalid, setEmialIsInvalid] = useState()

  const email = useRef()
  const password = useRef()


  // const [enterValues, setEnterValues] = useState({
  //   email: '',
  //   password: ''
  // })

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false
  // })

  // function handleInputBlur(identifier) {
  //   setDidEdit(prevEdit => ({
  //     ...prevEdit,
  //     [identifier]: true
  //   }))
  // }


  // const passwordIsInvalid = didEdit.password && !hasMinLength(enterValues.password, 6)

  // function handleInputChange(identifier, value) {
  //   setEnterValues(prev => ({
  //     ...prev,
  //     [identifier]: value
  //   }))

  //   setDidEdit(prevEdit => ({
  //     ...prevEdit,
  //     [identifier]: false
  //   }))
  // }




  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return
    }

    console.log(emailValue.passwordVale)
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        {/* <Input label="Email" id="email" name="email" /> */}
        <Input label="email" id="email" type="email" name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Please enter a balid email!'}
        >
        </Input>
        <Input label="passwoerd" id="password" type="password" name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordVale}
          error={passwordHasError && 'Pleases enter a valid password!'}
        >
        </Input>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
