import { FormErrorMessage } from "../FormErrorMessage";

export function RegisterInput({
  labelInputId,
  labelContent,
  inputType,
  register,
  validationRules,
  errorMessage,
  placeholder: placeholderMessage,
}) {
  return (
    <label htmlFor={labelInputId} className="mt-4 block text-sm font-medium">
      {labelContent}
      {validationRules.required && <span className="ml-1 text-red-500">*</span>}
      <input
        {...register(labelInputId, validationRules)}
        type={inputType}
        id={labelInputId}
        placeholder={placeholderMessage}
        className="mt-1 w-full rounded bg-inputBackground px-4 py-2.5 text-sm text-dark"
      />
      {errorMessage && <FormErrorMessage content={errorMessage} />}
    </label>
  );
}
