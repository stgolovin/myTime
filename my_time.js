class Time {
    constructor(a, b, singleNumbers) {
        this.a = a;
        this.b = b;
        this.singleNumbers = singleNumbers;
    }

    validateObject() {
        if (this.b > 59) {
            let remains_result = this.b % 60;
            let division_result = this.b / 60;
            this.a += parseInt(division_result);
            this.b = 0 + remains_result;
        }
        if (this.a > 23) {
            this.a = 0;
        }
    }

    addHour(hours) {
        this.a += hours
    }

    addMinute(minutes) {
        this.b += minutes
    }

    getTime() {
        let a_disp = NaN;
        let b_disp = NaN;
        this.validateObject()
        if (this.a in this.singleNumbers) {
            a_disp = `0${this.a}`;
        }
        else {
            a_disp = this.a;
        }
        if (this.b in this.singleNumbers) {
            b_disp = `0${this.b}`;
        }
        else {
            b_disp = this.b;
        }
        return `${a_disp}:${b_disp}`;
    }
}
const singleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const myTime = new Time(9, 0, singleNumbers);

// console.log(myTime.getTime())
myTime.addMinute(43)
myTime.addMinute(20)
myTime.addHour(14)
myTime.addMinute(57)
myTime.addMinute(5)
console.log(myTime.getTime())
