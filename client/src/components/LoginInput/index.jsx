import { FormErrorMessage } from "../FormErrorMessage";

export function LoginInput({
  labelInputId,
  labelContent,
  inputType,
  placeholder: placeholderMessage,
  register,
  errorMessage,
}) {
  return (
    <label htmlFor={labelInputId} className="mt-4 block text-sm font-medium">
      {labelContent}
      {<span className="ml-1 text-red-500">*</span>}
      <input
        type={inputType}
        id={labelInputId}
        placeholder={placeholderMessage}
        className="mt-1 w-full rounded bg-inputBackground px-4 py-2.5 text-sm text-dark"
        {...register}
      />
      {errorMessage && <FormErrorMessage content={errorMessage} />}
    </label>
  );
}
