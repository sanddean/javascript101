//De bai: Kiem tra so nguyen duong N co phai la so 'hoan thien' hay khong?
//Dinh nghia so hoan thien la so co tong cac uoc so bang chinh no.
//Vd: 6 so uoc so la 1, 2, 3. Tong cua 1+2+3=6. Vay 6 la so 'hoan thien'.

const a=6;

function PerfectNum(n) {
  let sum=0;
  for (let i=1; i<n; i++){
    if(n%i==0){
      sum = sum + i;
    }
  }
  if (sum==n){
    return true;
  }
  else {
    return false;
  }
}
console.log(PerfectNum(a));
