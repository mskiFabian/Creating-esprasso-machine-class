//Create an espresso machine class that makes machines with 4 properties and 3 methods
class espressoMachine {
    constructor(model, brand, color, coffeSlots) {
        this.model = model
        this.brand = brand
        this.color = color
        this.coffeSlots = coffeSlots
    }
    turnOn() {
        console.log('Press button "Turn on ma"')
    }
    turnOff() {
        console.log('Press button "Turn off me')
    }
    makeCoffe() {
        console.log('Choose which coffee would you love to make')
    }
}

