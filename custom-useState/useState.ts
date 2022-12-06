function useState<T>(initialValue: T): [() => T, (value: T) => T] {
  let str: T = initialValue;
  return [() => str, (val) => (str = val)];
}

const [getValue, setValue] = useState<string> ("initial Value");
console.log("state before update: ", getValue());
setValue("Final value");
console.log("state after update: ", getValue());
