// eslint-disable-next-line react/prop-types
export function ButtonPrimary({ type, content, className }) {
  return (
    <button
      type={type}
      className={`bg-buttonPrimary hover:bg-buttonPrimaryHover rounded px-4 py-1.5 font-medium transition-colors ${className}`}
    >
      {content}
    </button>
  );
}
