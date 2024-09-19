import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [enterValues, setEnterValues] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  const valueInvalid = validationFn(enterValues);

  function handleInputChange(event) {
    setEnterValues(event.target.value);

    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enterValues,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueInvalid,
  };
}
