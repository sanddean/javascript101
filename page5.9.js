const a=5;

function S(n) {
  let sum=1;
  for (let i=1; i<=n; i++){
    sum = sum * i;
  }
  return sum;
}
console.log(S(a));
