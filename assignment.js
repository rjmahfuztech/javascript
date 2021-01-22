

// Solved to the problem number:- 1

function kilometerToMeter(kilometer){
    let meter = 1000 * kilometer;
    return meter;
}
let result = kilometerToMeter(20);
console.log(result);

  

// Solved to the problem number:- 2

function budgetCalculator(watch, phone, laptop){
    let allPrice = watch * 50 + phone * 100 + laptop * 500;
    return allPrice;
}

let total = budgetCalculator(4, 5, 4);
console.log(total);



// Solved to the problem number:- 3

function hotelCost(rent) {
    let hotelRent = 0;
    if (rent <= 10) {
        hotelRent = rent * 100;
    }
    else if (rent <= 20) {
        let firstTenDays = 10 * 100;
        let remaining = rent - 10;
        let secondTenDays = remaining * 80;
        hotelRent = firstTenDays + secondTenDays;
    }
    else {
        let firstTenDays = 10 * 100;
        let secondTenDays = 10 * 80;
        let remaining = rent - 20;
        let over20Days = remaining * 50;
        hotelRent = firstTenDays + secondTenDays + over20Days;
    }
    return hotelRent;
}
let totalRent = hotelCost(50);
console.log(totalRent);
