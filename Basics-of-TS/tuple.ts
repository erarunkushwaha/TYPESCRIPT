const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

const pepsi: [string, boolean, number] = ["brown", true, 40];
// type allias
type Drink = [string, boolean, number];

const cock: Drink = ["brown", true, 40];
