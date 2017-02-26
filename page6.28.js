//De bai: Cho so nguyen duong N. Tinh tong cac uoc so nho hon chinh no.

const a=6;

function SumAllDivisor(n) {
  let sum=0;
  for(let i=1; i<n; i++){
    if(n%i==0){
      sum = sum + i;
    }
  }
  return sum;
}
console.log(SumAllDivisor(a));
