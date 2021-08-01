import { useState } from 'react';

export function useFormWithValidation() {
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const input = e.target;
    const value = input.value;
    const inputName = input.name;

    setInputValues({ ...inputValues, [inputName]: value });
    setIsValid(input.closest('form').checkValidity());

    if (inputName === 'categoryName') {
      if (!isValid) {
        setErrors({ ...errors, [inputName]: 'Минимальная длина названия категории 4 символа' });
      } else {
        setErrors({ ...errors, [inputName]: '' });
      }
    }
  }

  return { inputValues, handleChange, errors, isValid };
}
