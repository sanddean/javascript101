//De bai: Tinh tong tat ca cac "uoc so" cua so nguyen duong N

const a=6;

function SumDivisor(n) {
  let sum=0;
  for (let i=1; i<=n; i++){
    if(n%i==0){
      sum = sum + i;
    }
  }
  return sum;
}
console.log(SumDivisor(a));
