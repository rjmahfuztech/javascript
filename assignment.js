

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
    var hotelRent = 0;
    if (rent <= 10) {
        hotelRent = rent * 100;
    }
    else if (rent <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = rent - 10;
        var secondTenDays = remaining * 80;
        hotelRent = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = rent - 20;
        var over20Days = remaining * 50;
        hotelRent = firstTenDays + secondTenDays + over20Days;
    }
    return hotelRent;
}
var totalRent = hotelCost(50);
console.log(totalRent);
