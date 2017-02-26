//De bai: Kiem tra so nguyen duong N co phai la 'so chinh phuong' hay khong?

const a=9;

function SquareNum(n) {
  let value= Math.sqrt(n);
  if(value*value==n){
    return true;
  }
  else {
    return false;
  }
}
console.log(SquareNum(a));
