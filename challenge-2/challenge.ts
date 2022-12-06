//implement forEach, map, filter using reduce
// make it type safe.

//forEach.
const array = [1, 2, 3, 4, 5];

type callback<T> = (v: T) => void;
function customForEach<T>(array: T[], callbackFunc: callback<T>) {
  array.reduce((prev, current) => {
    callbackFunc(current);
    return undefined;
  }, undefined);
}

customForEach(array, (v) => console.log(`callbackFuncForEach: ${v}`));

//filter
type callbackFilter<T> = (v: T) => boolean;

function customFilter<T>(array: T[], callbackFunc: callbackFilter<T>): T[] {
  return array.reduce((prev: T[], current: T) => {
    return callbackFunc(current) ? [...prev, current] : prev;
  }, []);
}
console.log(
  "customFilter: v > 2",
  customFilter(array, (v) => v > 2)
);

// Map
type callbackMap<T> = (v: T) => T;

function customMap<T>(array: T[], callbackFunc: callbackMap<T>): T[] {
  return array.reduce((prev: T[], current: T, index: number) => {
    return [...prev, callbackFunc(current)];
  }, []);
}
console.log(
  "customMap: ",
  customMap(array, (v) => v * 2)
);
