import { useCallback, useState } from 'react';

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

    if (name === 'name') {
      value.length < 2
        ? setErrors({ ...errors, [name]: 'Минимальная длина 2 символа' })
        : setErrors({ ...errors, [name]: '' });
    } else if (name === 'task' || name === 'editCategoryName') {
      value.length < 5
        ? setErrors({ ...errors, [name]: 'Минимальная длина 5 символа' })
        : setErrors({ ...errors, [name]: '' });
    }
  }

  const resetForm = useCallback(
    (newInputValues = {}, newErrors = {}, newIsValid = false) => {
      setInputValues(newInputValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setInputValues, setErrors, setIsValid]
  );

  return { inputValues, handleChange, errors, isValid, resetForm };
}
