function evenorodd(x){
   if(Number.isInteger(x) == true){return x % 2 == 0}else{return undefined}
}

function fill (size, value) {
  const newArray = [];
  for (let i = 0; i < size; i++) {
    newArray.push(value);
  }
  return newArray;
};

function reverse (array) {
  const newarray = [];

  for (let i = array.length - 1; i >= 0; i -= 1) {
    newarray.push(array[i]);
  }

  return newarray;
};

function compact (array) { 
var array = [1, 3, 5, false, null];
  var newArray = array.filter(function(el) {
    if(el !== null && el !== undefined && el !== false) return true;
    console.log(newArray)
  });
 };