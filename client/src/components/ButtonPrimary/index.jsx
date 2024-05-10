// eslint-disable-next-line react/prop-types
export function ButtonPrimary({ type, content, className }) {
  return (
    <button
      type={type}
      className={`bg-primary hover:bg-primaryHover rounded px-4 py-2 font-medium transition-colors ${className}`}
    >
      {content}
    </button>
  );
}
