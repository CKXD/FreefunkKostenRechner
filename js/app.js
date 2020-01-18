'use strict'
// var total_cost =0;
// var cost_per_usage = 0;

function calc_freefunk_cost() {
let total_cost =0;
let cost_per_usage = 0;    
let daysfreebreak = 30;
let actual_date = new (Date)
let actual_year = actual_date.getFullYear    
let dayspayedbreak = 0;    
let day1gb = document.getElementById ('Anzahl-Tage-1GB').value;
let daysunlimited = document.getElementById ("Anzahl-Tage-Unlimited").value;
if (actual_year=2020) {
    // ab 21.1 Änderung der freien begrenzt auf 30
    dayspayedbreak = 366-daysfreebreak-21
}
else {
    if(actual_year % 4 == 0){
     dayspayedbreak = 366-30  

    }
    else {
     dayspayedbreak = 365-30   
    }
};
let cost_fixed_year = dayspayedbreak*.29;
let cost_1gb_tarif = day1gb*.4;
let cost_unlimited_tarif = daysunlimited*.7;

total_cost = cost_fixed_year+cost_unlimited_tarif+cost_1gb_tarif;
//let day_in_use = day1gb + daysunlimited;

let total_days = (parseInt(day1gb)+parseInt(daysunlimited));

if(total_days==0){
    cost_per_usage = total_cost;
} 
else {
    cost_per_usage = total_cost/total_days
}
document.getElementById("costperyear").innerHTML = Math.round(total_cost*100)/100;
document.getElementById("costperusage").innerHTML = Math.round(cost_per_usage*100)/100 
document.getElementById("actualyear").innerHTML = actual_year
document.querySelector
// console.log(total_cost);
// console.log(cost_per_usage);
}