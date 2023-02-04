class Vehicles {
  private drive(): void {
    console.log("Drive slowly");
  }

  speed(): void {
    console.log("Keep speed below 20km/hr");
  }
}

const vechile = new Vehicles();
vechile.speed();

class NewCar extends Vehicles {
  // @ovveride
  speed(): void {
    console.log("Keep speed below 2000km/hr");
  }
}

const callCar = new Vehicles();
// callCar.drive() -->> error
