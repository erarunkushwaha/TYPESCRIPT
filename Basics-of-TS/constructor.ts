class Food {
  //   name: string;
  //   constructor(name: string) {
  //     this.name = name;
  //   }
  //ror
  // public private and protected can be used
  constructor(public name: string) {}
}

const myfood = new Food("pizza");

class NewFood extends Food {
  constructor(public name: string) {
    super("chowmin");
  }
}
const newFood = new NewFood("burger");
