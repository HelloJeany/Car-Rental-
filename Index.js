
var carRent = {
    name: 'Speedy Rentals Inc.',
    types: ['Economy', 'Midsize'],
    ecoCarsRented: 0,
    midsizeCarsRented: 0,
    ecoCarsAvail: 10,
    midCarsAvail: 10,
    ecoCarsPrice: 35,
    midCarsPrice: 45,
    
}

var renter = {
    customer: [{
        
    }]
}

for (var i =0; i < carRent.types.length; i++) {
    var carDdm= document.createElement("OPTION");
    carDdm.setAttribute("name", "carType")
    carDdm.setAttribute("id", "car" + i);
    carDdm.innerHTML = carRent.types[i];
    document.getElementById("types").appendChild(carDdm);
    
}

document.getElementById("types").onchange = function() {
    var x = document.getElementById("types").selectedIndex;
    if (x == 0) {
        document.getElementById("carAvail").innerHTML = carRent.ecoCarsAvail;
        document.getElementById("carPrice").innerHTML = carRent.ecoCarsPrice;
    } else if (x ==1) {
        document.getElementById("carAvail").innerHTML = carRent.midCarsAvail;
        document.getElementById("carPrice").innerHTML = carRent.midCarsPrice;
    }
}

document.getElementById("rentCar").onclick = function() {
    var rental = document.getElementById("types").selectedIndex;
    var custName = document.getElementById("fullName").value;
    if (document.getElementById("types").selectedIndex != 0 && custName != "" && carRent.types[rental].available > 0) {
        renter.customer.push({
            name:document.getElementById("fullName").value, car:document.getElementById("types").value});
        alert("Congratulations! Your car reservation has been booked!")
    } else {
        alert("Unable to proceed with Renting car. Field Missing!");
        };
};

document.getElementById('name').innerHTML = carRent.name;







// function update() {
//         document.getElementById("cars").innerHTML = carRent.types;
//         document.getElementById("ecoCarsAvail").innerHTML = carRent.ecoCarsAvail;
//         document.getElementById("midCarsAvail").innerHTML = carRent.midCarsAvail;
//     }
//         document.getElementById("bName").innerHTML = carRent.name;
// function getMid() {
//         document.getElementById("midCarsAvail").innerHTML = carRent.midCarsAvail--;
// }
// function getEco() {
//         document.getElementById("ecoCarsAvail").innerHTML = carRent.ecoCarsAvail--;
// }






// JavaScript File