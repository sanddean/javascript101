//De bai: Kiem tra so nguyen duong N co phai la 'so nguyen to' hay khong?
//So nguyen to la so chi co 2 uoc so la 1 va chinh no.

const a=19;

function PrimeNum(n) {
  let divisor=0;
  for (let i=1; i<=n; i++){
    if(n%i==0){
      divisor = divisor+1;
    }
  }
  if(divisor==2){
    return true;
  }
  else {
    return false;
  }
}
console.log(PrimeNum(a));
