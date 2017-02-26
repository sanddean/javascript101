const a = 3;

function S(n) {
  let sum = 0;
  for (let i=1;i<=n;i++){
    sum = sum + (1/(2*i));
  }
  return sum;
}
console.log(S(a));
