//implement forEach, map, filter using reduce
// make it type safe.

//forEach.

type callback<T> = (v: T) => void;

function customForEach<T>(array: T[], callbackFunc: callback<T>) {
  array.reduce((prev: T, current: T) => {
    callbackFunc(prev);
    return current;
  });
}

const array = [1, 2, 3, 4, 5];
function callbackFunc<T>(val: T) {
  console.log("val:", val);
}
customForEach<number>(array, callbackFunc);
