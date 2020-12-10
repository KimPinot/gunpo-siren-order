export function splitCardNum(cardNum: number) {
  return cardNum
    .toString()
    .replace(/[0-9]{4}/g, '-$&')
    .replace(/^-/, '');
}

export function localizeCredit(credit: number) {
  return credit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
}
