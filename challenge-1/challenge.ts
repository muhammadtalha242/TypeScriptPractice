import houses from "./houses.json";

interface House {
  name: string;
  planets: string[] | string;
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(
  houses: House[] | string,
  filter?: (house: House) => boolean
): HouseWithID[] {
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

// function findHouses(
//   houses: string,
//   filter: (house: House) => boolean
// ): HouseWithID[]{
//     return [];
// }
// function findHouses(houses: House[]): HouseWithID[];
// function findHouses(
//   houses: House[],
//   filter: (house: House) => boolean
// ): HouseWithID[];

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
