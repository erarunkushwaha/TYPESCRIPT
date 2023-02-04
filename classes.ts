class Vehicles{
    drive():void{
        console.log('Drive slowly')
    }

     speed():void{
        console.log('Keep speed below 20km/hr')
    }
}

const vechile = new Vehicles()
vechile.speed()