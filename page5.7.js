const a = 4;

function S(n) {
  let sum = 0;
  for  (let i=0; i<=n; i++){
    sum = sum + (i/(i+1));
  }
  return sum;
}
console.log(S(a));
