const useState = (
  initialValue: string
): [() => string, (value: string) => string] => {
  let str: string = initialValue;
  return [() => str, (val) => (str = val)];
};

const [getValue, setValue] = useState("initial Value");
console.log("state before update: ", getValue());
setValue("Final value");
console.log("state after update: ", getValue());
