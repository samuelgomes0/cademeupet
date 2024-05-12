export function FormErrorMessage({ content }) {
  return (
    <p className="text-xs text-red-500" data-testid="form-error-message">
      {content}
    </p>
  );
}
