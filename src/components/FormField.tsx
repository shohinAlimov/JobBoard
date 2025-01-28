import { InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

export const FormField = ({
  label,
  name,
  register,
  error,
  ...inputProps
}: FormFieldProps) => {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={name}>{label}</label>
      <input
        id={name}
        className={`form-field__input ${error ? 'form-field__input--error' : ''}`}
        {...register(name)}
        {...inputProps}
      />
      {error && (
        <span className="form-field__error">{error.message}</span>
      )}
    </div>
  );
};