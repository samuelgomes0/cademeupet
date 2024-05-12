export function ButtonPrimary({
  type,
  content,
  className,
  onClick: handleClick,
}) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`rounded bg-primary px-4 py-2 font-medium transition-colors hover:bg-primaryHover ${className}`}
    >
      {content}
    </button>
  );
}
