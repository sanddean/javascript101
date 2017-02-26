const a=6;

function Divisor(n) {
  let results = [];
  for (let i=1; i<=n; i++){
    if(n%i==0){
      //console.log(i);
      results.push(i);
    }
  }
  return results;
}
console.log('Uoc So cua', (a), 'la', Divisor(a));
