export function FormErrorMessage({ content }) {
  return (
    <p className="mt-2 text-sm text-red-500" data-testid="form-error-message">
      {content}
    </p>
  );
}
