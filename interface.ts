interface Repotable {
  summary(): string;
}

interface Vehicle extends Repotable {
  name: string;
  year: number;
  borken: boolean;
}

interface OldDring extends Repotable {
  name: string;
  year: number;
}

const oldVehicle = {
  name: "civic",
  year: 2000,
  borken: false,
  summary(): string {
    return `name ${this.name}`;
  }
};

const oldDring = {
  name: "cocktail",
  color: "red"
};

const printVehicle = (Vehicle: Vehicle): void => {
  console.log(Vehicle.summary);
};
printVehicle(oldVehicle);
