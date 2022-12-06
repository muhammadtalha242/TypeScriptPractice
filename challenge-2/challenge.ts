//implement forEach, map, filter using reduce
// make it type safe.

//forEach.
const array = [1, 2, 3, 4, 5];

type callback<T> = (v: T) => void;
function customForEach<T>(array: T[], callbackFunc: callback<T>) {
  array.reduce((prev: T, current: T) => {
    callbackFunc(prev);
    return current;
  });
}

customForEach(array, (v) => console.log(`callbackFuncForEach: ${v}`));

//filter
type callbackFilter<T> = (v: T) => boolean;

function customFilter<T>(array: T[], callbackFunc: callbackFilter<T>): T[] {
  return array.reduce((prev: T[], current: T) => {
    return callbackFunc(current) ? [...prev, current] : prev;
  }, []);
}
console.log(customFilter(array, (v) => v > 2));
