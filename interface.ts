interface Vehicle{
    name:string,
    year:number,
    borken:boolean
    summary():string
}

const oldVehicle = {
    name:'civic',
    year:2000,
    borken:false,
    summary():string{
return `name ${this.name}`
    }
}

const printVehicle = (Vehicle:Vehicle):void => {
    console.log(Vehicle)

}
printVehicle(oldVehicle)