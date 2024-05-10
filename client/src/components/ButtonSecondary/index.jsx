// eslint-disable-next-line react/prop-types
export function ButtonSecondary({ type, content }) {
  return (
    <button
      type={type}
      className="text-buttonSecondary hover:text-buttonSecondaryHover mt-4 block font-medium transition-colors"
    >
      {content}
    </button>
  );
}
