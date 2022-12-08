interface BaseEvent {
  time: string;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { product: string; total: number };
  checkOut: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  eventName: Name,
  eventData: EventMap[Name]
): void {
  console.log([eventName, eventData]);
}

sendEvent("addToCart", {
  product: "product",
  time: "time",
  total: 1,
  user: "user",
});
