//De bai:Tinh ton tat ca cac "uoc so chan" cua so nguyen duong N

const a=6;

function SumEvenDivisor(n) {
  let sum=0;
  for(let i=1; i<=n; i++){
    if(n%i==0 & i%2==0){
      sum = sum + i;
    }
  }
  return sum;
}
console.log(SumEvenDivisor(a));
