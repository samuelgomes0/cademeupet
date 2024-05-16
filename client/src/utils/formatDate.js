export function formatDate(isoDateString) {
  const date = new Date(isoDateString);

  const day = padZero(date.getUTCDate());
  const month = padZero(date.getUTCMonth() + 1);
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

function padZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}
