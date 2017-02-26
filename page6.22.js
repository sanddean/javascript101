//De bai: Tinh tich tat ca cac "uoc so" cua so nguyen duong N

const a=6;

function MulDivisor(n) {
  let mul=1;
  for (let i=1; i<=n; i++){
    if (n%i==0){
      mul = mul * i;
    }
  }
  return mul;
}
console.log(MulDivisor(a));
