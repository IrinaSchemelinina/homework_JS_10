let Transport = function(model) {
    this.model = 'Transport';

    this.showName = function(){
        alert(this.model);
    };

}

let GroundTransport = function(model, maxSpeed){ //Наземный транспорт
    Transport.apply(this, arguments);
    this.model = model;

    this.maxSpeed = maxSpeed || 150; //максимальная скорость транспорта

    let speedMovement = 0; //скорость движения

    this.start = function(movement) { //транспорт начинает движение (скорость движения)
        if (movement > 0 && movement <= maxSpeed) speedMovement = movement;
        else speedMovement = 0;
    }
    
    this.getMovement = function(){ //метод получает информацию какая скорость у транспорта
        return speedMovement;
    }
};

let SeaTransport = function(model, passengerTransportation, passengerCapacity){ //Морской транспорт
    Transport.apply(this, arguments);
    this.model = model;

    this.passengerTransportation = false; //перевозит пассажиров
    this.passengerCapacity = passengerCapacity || 0; //вместимость пассажиров
    
    let status = false; //переменная которая хранит статус загружен транспот пассажирами или нет

    this.fullPassengers = function() { 
        status = true;
        console.log(`Вместимость пассажиров: ${passengerCapacity}`);
    };

    this.empty = function() {
        status = false;
        console.log('Транспорт пуст');
    };

    this.getStatus = function() {
        return status;
    };

}

let AirTransport = function(model, consumptionHour, flightTime){ //Воздушный транспорт
    Transport.apply(this, arguments);
    this.model = model;
    this.consumptionHour = consumptionHour; //расход топлива тонн за 1 час полёта
    this.flightTime = flightTime || 0; //время полёта в часах

    let result = (this.consumptionHour * this.flightTime);

    this.fuelConsumption = function() {
        return `Расход топлива за время полёта ${flightTime} ч. составляет: ${result} тонны`;
    }

};



let transport = new Transport();
console.log(transport);



let groundTransport = new GroundTransport();
console.log(groundTransport);

let bus = new GroundTransport('МАЗ');
console.log(bus);

let car = new GroundTransport('Toyota', 180);
console.log(car);

// car.start(40);
// console.log(car.getMovement());

let train = new GroundTransport('Allegro');
console.log(train);

// train.showName();

let freightTrain = new GroundTransport('Хоппер');
console.log(freightTrain);



let seaTransport = new SeaTransport();
console.log(seaTransport);

let tanker = new SeaTransport('General Purpose', false, 0);
console.log(tanker);

let liner = new SeaTransport('Titanic', true, 3274);
console.log(liner);

// liner.fullPassengers();
// console.log(liner.status);

// liner.empty();
// console.log(liner.status);

// console.log(liner.getStatus());

// liner.fullPassengers();
// console.log(liner.getStatus());

let yacht = new SeaTransport('Southerly 35', true, 13);
console.log(yacht);



let airTransport = new AirTransport();
console.log(airTransport);

let helicopter = new AirTransport('МИ-8');
console.log(helicopter);

let plane = new AirTransport('B738 - United', 6, 4);
console.log(plane);

console.log(plane.fuelConsumption());


