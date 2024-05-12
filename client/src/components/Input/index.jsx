export function Input({
  labelInputId,
  labelContent,
  inputType,
  isRequired = false,
}) {
  return (
    <label htmlFor={labelInputId} className="mt-4 block text-sm font-medium">
      {labelContent}
      <input
        type={inputType}
        id={labelInputId}
        required={isRequired}
        className="bg-inputBackground mt-1 w-full rounded px-4 py-2.5 text-sm text-dark"
      />
    </label>
  );
}
