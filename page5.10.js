const n=3;
const x=3;

function S(x,n) {
  let sum=1;
  for (let i=1; i<=n; i++){
    sum = sum * x;
  }
  return sum;
}
console.log(S(x,n));
