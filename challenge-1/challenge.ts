import houses from "./houses.json";

interface House {
  name: string;
  planets: string[] | string;
}

interface HouseWithID extends House {
  id: number;
}

type housesInput = House[] | string;
type housesFilter = (house: House) => boolean;

function findHouses(houses: housesInput, filter?: housesFilter): HouseWithID[] {
  let housesArr: House[] =
    typeof houses === "string" ? JSON.parse(houses) : houses;
  let housesWithIDArr: HouseWithID[] = housesArr.map(
    (house: House, id: number) => ({
      id,
      ...house,
    })
  );
  housesWithIDArr = filter ? housesWithIDArr.filter(filter) : housesWithIDArr;
  return housesWithIDArr;
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
