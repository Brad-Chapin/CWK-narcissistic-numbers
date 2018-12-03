function narcissistic(value) {
  value = value.toString().split("");
  let exp = value.length, sum = 0;
  for (let i = 0; i <value.length; i++) {
    sum += Math.pow(value[i], exp);
  }
  value = value.join("");
  if (sum == value) {
    return true;
  }
  return false;
}
