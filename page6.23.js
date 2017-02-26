//De bai: Dem so luong "uoc so" cua so nguyen duong N

const a=6;

function CountDivisor(n) {
  let count=0;
  for(let i=0;i<=n;i++){
    if(n%i==0){
      count=count+1;
    }
  }
  return count;
}
console.log('The number of divisor is:',CountDivisor(a));
