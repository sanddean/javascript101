const a = 3;

function S(n) {
  let sum = 0;
  for (let i=0;i<=n;i++){
    sum = sum + i;
  }
  return sum;
}
console.log(S(a));
