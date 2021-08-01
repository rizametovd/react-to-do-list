import { useState } from 'react';

export function useFormWithValidation() {
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const input = e.target;
    const value = input.value;
    const name = input.name;

    setInputValues({ ...inputValues, [name]: value });
    setIsValid(input.closest('form').checkValidity());

    value.length < 2
      ? setErrors({ ...errors, [name]: 'Минимальная длина 2 символа' })
      : setErrors({ ...errors, [name]: '' });
  }

  return { inputValues, handleChange, errors, isValid };
}
