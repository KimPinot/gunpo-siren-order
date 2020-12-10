export function splitCardNum(cardNum: number) {
  return cardNum
    .toString()
    .replace(/[0-9]{4}/g, '-$&')
    .replace(/^-/, '');
}
