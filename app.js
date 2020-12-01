setInterval(setClock, 1000);
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

let count = 12;
const digitHour = document.querySelector('[data-hour]');

function click() {
    digitHour.addEventListener('click', function() {
        digitHour.textContent = count++;
    })
}
click();


/*class Person {

    constructor(name) {

    this.name = name;
        }
        walk() {
            console.log("walk");
        }
    }

    class Teacher extends Person {
        constructor(name, degree) {
            super(name);
            this.degree = degree;
        }
        teach() {
            console.log("teach");
        }
    }
    const teacher = new Teacher("Joey", "Msc ");








    class Staff {
        constructor(name, department) {
            this.name = name;
            this.department = department;
        }
        work() {
            console.log("I do my work");
        }
    }
    const nonTeachingStaff = new Staff("Okon", "Gateman");

    class TeachingStaff extends Staff {
        constructor(name, department, office, degree) {
            super(name, department);
            this.office = office;
            this.degree = degree;
        }
        teach() {
            console.log("I teach Botany");
        }
        sort() {
            console.log("I collect bribe from students");
        }
    }
    const lecturer = new TeachingStaff("Akpan Udom", "Department of botany", "Office No.3, botany building", "Msc Botany");





    class Factory {
        constructor(department, work) {
            this.department = department;
            this.work = work;
        }
        production() {
            console.log("We prodce the best floor tiles in the whole of africa");
        }
        services() {
            console.log("We will install your tiles for you");
        }
    }

    class Department extends Factory {
        constructor(department, work, staff, allocation) {
            super(department, work);
            this.staff = staff;
            this.allocation = allocation;
        }
        outreach() {
            console.log("We go out to make awareness");
        }
        authority() {
            console.log("We are the baddest guys");
        }
    }
    const marketingDepartment = new Department(marketing, market, 20, 200000); */