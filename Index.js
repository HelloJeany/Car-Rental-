var carRental = { 
    cars: [
    {
        type: "Economy", 
        price: "$50",
        available: 15
    },
    {
        type: "SUV",
        price: "$80",
        available: 12
    },
    ]
};

for (var i = 0; i < carRental.cars.length; i++) {    
    var option = document.createElement("OPTION");
    option.text = carRental.cars[i].type;
    document.getElementById("dropdown").appendChild(option);
    option.setAttribute("value", i); 
    option.setAttribute("id", "car" + i); 
    console.log(option.value);
    alert("Car Booked!");
}

document.getElementById("dropdown").onchange = function(){ 
    var select = document.getElementById("dropdown");
    document.getElementById("price").innerHTML = carRental.cars[select.value].price;
    document.getElementById("available").innerHTML = carRental.cars[select.value].available;
    // alert("Car Booked!");
}


