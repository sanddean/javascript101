//De bai: Tim uoc so le lon nhat cua so nguyen duong N.

const a=100;

function OddDivisor(n) {
  let biggest_odd=1;
  for (let i=1; i<=n; i++){
    if(n%i==0 & i%2==1){
      if(i>=biggest_odd){
        biggest_odd=i;
      }
    }
  }
  return biggest_odd;
}
console.log(OddDivisor(a));
