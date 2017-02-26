//De bai: Liet ke tat ca cac "uoc so le" cua so nguyen duong N

const a=6;

function OddDivisor(n) {
  let results = [];
  for(let i=1; i<=n; i++){
    if(n%i==0 & i%2==1){
      results.push(i);
    }
  }
  return results;
}
console.log('Odd Divisors are:',OddDivisor(a));
