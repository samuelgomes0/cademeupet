export function Input({
  labelInputId,
  labelContent,
  inputType,
  register,
  validationRules,
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
        className="bg-inputBackground mt-1 w-full rounded px-4 py-2.5 text-sm text-dark"
      />
    </label>
  );
}
