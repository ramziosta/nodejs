class car {
    constructor(color, year, model, engine_type, size, price) {
        this.color = color;
        this.year = year;
        this.model = model;
        this.engine_type = engine_type;
        this.size = size;
        this.price = price;

    }

    start() {
        console.log("starting");
    }

    stop() {
        console.log("stopping");
    }

    navigate(direction) {
    switch (direction){
        case "left":
            console.log("going left ⬅️");
            break;
        case "right":
            console.log("going right");
            break;
        case "forward":
            console.log("going forward");
            break;
        case "backward":
            console.log("going backward");
            break;
        default:
            console.log("invalid direction");
    }
    }
}

let newCar = new car("erd", 2022, "bmw", "petrol", "medium", 1200000);
console.log(newCar);
newCar.navigate("left");