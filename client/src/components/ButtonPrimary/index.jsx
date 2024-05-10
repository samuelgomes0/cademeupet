// eslint-disable-next-line react/prop-types
export function ButtonPrimary({ type, content }) {
  return (
    <button
      type={type}
      className="bg-buttonPrimary hover:bg-buttonPrimaryHover rounded px-4 py-2 font-medium transition-colors"
    >
      {content}
    </button>
  );
}
