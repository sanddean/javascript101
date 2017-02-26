const a = 3;

function S(n) {
  let sum = 0;
  for (let i=0; i<=n; i++){
    sum = sum + ((2*i+1)/(2*i+2));
  }
  return sum;
}
console.log(S(a));
