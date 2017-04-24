/*jshint esversion: 6*/


const Elevator = require('./elevator.js');
const Person = require('./person.js');

const carlos = new Person("Carlos",3,1)
const fran = new Person("Fran",7,9)
const olivia = new Person("Olivia",4,7)
const fer = new Person("Fer",8,2)
const raul = new Person("Raul",9,1)


const elevator = new Elevator();


elevator.start();
elevator.call(carlos);
elevator.call(fran);
elevator.call(olivia);
elevator.call(fer);
elevator.call(raul);
