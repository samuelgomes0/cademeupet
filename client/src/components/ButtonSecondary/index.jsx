// eslint-disable-next-line react/prop-types
export function ButtonSecondary({ type, content, onClick: handleClick }) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className="mt-4 block font-medium text-primary transition-colors hover:text-primaryHover"
    >
      {content}
    </button>
  );
}
