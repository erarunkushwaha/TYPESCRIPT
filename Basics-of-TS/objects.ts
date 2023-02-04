const profile = {
  name: "Arun Kushwaha",
  age: 20,
  coodrs: {
    lng: 45,
    lat: 50
  },

  setAge(age: number): void {
    this.age = age;
  }
};

//descruture--notation
const { age }: { age: number } = profile;

//    descruture---------------notation
const {
  coodrs: { lat, lng }
}: { coodrs: { lat: number; lng: number } } = profile;
