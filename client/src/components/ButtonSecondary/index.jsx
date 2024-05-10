// eslint-disable-next-line react/prop-types
export function ButtonSecondary({ type, content }) {
  return (
    <button
      type={type}
      className="text-primary hover:text-primaryHover mt-4 block font-medium transition-colors"
    >
      {content}
    </button>
  );
}
