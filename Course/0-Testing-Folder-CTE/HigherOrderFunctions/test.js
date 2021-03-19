const process = () => {
  let count = 0;
  function topla(a, b){
    count++;
    return `${count} ${a + b}`;
  }
  return topla;
}


let topla = process();

console.log(topla(3,4));
console.log(topla(5,6));
console.log(topla(2,3));