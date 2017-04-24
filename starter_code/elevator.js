/*jshint esversion: 6*/

class Elevator {
    constructor() {
        this.floor = 0;
        this.MAXFLOOR = 10;
        this.requests = [];
        this.direction = undefined;
        this.waitingList = [];
        this.passengers = [];
    }

    start() {
        const update = setInterval(() => this.update(), 1000);
    }
    stop() {
        clearInterval(update);
    }
    update() {
        this.log();
        let person = this.passengers;
        //checks if passenger waiting to enter
        if (this.requests.length > 0) {
          if (this.requests[0] < this.floor) {
            this.floorDown();
          }else if (this.requests[0] > this.floor) {
            this.floorUp();
          }else if (this.requests[0] == this.floor) {
            this._passengersLeave(person[0]);}
            console.log(person)
          }else
        if (this.waitingList.length > 0 ) {
          if (this.waitingList[0].originFloor> this.floor) {
            this.floorUp();
          }else if (this.waitingList[0].originFloor< this.floor) {
            this.floorDown();
          }else if (this.waitingList[0].originFloor == this.floor) {
            this._passengersEnter(this.waitingList[0]);
          }
        }





        //   for (let i = 0; i < this.waitingList.length; i++) {
        //       if (this.floor == this.waitingList[i]) {
        //           _passengersEnter(this.waitingList[i]);
        //       }
        //   }
        // }
        //
        // //check if passenger wants to leave in floor
        // for (let j = 0; j < this.requests.length; j++) {
        //     if (this.floor == this.requests[j]) {
        //         _passengersLeave(this.requests[j]);
        //     }
        // }
    }
    _passengersEnter(person) {
        let passengerPosition = this.waitingList.indexOf(person);
        this.waitingList.splice(passengerPosition, 1);
        this.requests.push(person.destinationFloor);
        this.passengers.push(person);
        let message = `${person.name} has entered the elevator`;
        console.log(message);
    }
    _passengersLeave(person) {
      let passengerPosition = this.passengers.indexOf(person);
      this.passengers.splice(passengerPosition,1);
      this.requests.splice(0,1);
      let message = `${person.name} has left the elevator`;
      console.log(message);
    }
    floorUp() {
        if (this.floor < 10) {
            this.direction = "up";
            this.floor++;
        }

    }
    floorDown() {
        if (this.floor > 0) {
            this.direction = "down";
            this.floor--;
        }
    }
    call(person) {
        this.waitingList.push(person);

    }
    log() {
        let currentState = `Direction: ${this.direction} Floor ${this.floor}`;
        console.log(currentState);
    }
}

module.exports = Elevator;
