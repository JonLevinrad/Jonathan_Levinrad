var i=0;
function turnFunc(){
    i+=90;
    document.getElementById("TurningDiv").style.transform = "rotate(" + i + "deg)";
}




var x = 5;
var y = 4;
let z = 2;

console.log(x+y);

var d = new Date();
console.log(d);
y = d.getFullYear();
console.log(y);

document.getElementById("greetingH1").innerHTML = y;

var Alon = {
    age : 21, 
    Family : "Levy",
    Time : new Date()
};


console.log(Alon.Family);

var H = d.getHours();
console.log(H);

H =5;

if(H < 6) {
    document.getElementById("greetingH1").innerHTML = "Lesson Practice:";
    document.getElementById("body").classList.remove("NightStyle");
}
else if(H <= 12) {
    document.getElementById("greetingH1").innerHTML = "Good Afternoon";
    document.getElementById("body").classList.remove("NightStyle");
}
else if(H <= 16) {
    document.getElementById("greetingH1").innerHTML = "Good Evening";
}
else if(H <= 20) {
    document.getElementById("greetingH1").innerHTML = "Good Night";
    document.getElementById("body").classList.add("NightStyle");
}
else{
    document.getElementById("greetingH1").innerHTML = "ZZZ";
}


function timeFunc(){
    document.getElementById("time").innerHTML = d.getMinutes();
    document.getElementById("timeButton").innerHTML = "Done";
}

var cars = ["mazda", "volvo", "mercedes", "toyota", "ferrari"];
console.log(cars[4]);

var text = "";
for(let i = 0; i < cars.length; i++){
    text += cars[i] + "<br>";
    console.log(text);
}
document.getElementById("carList").innerHTML = text;

var srcs = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJCem1UmisAurLJdQQjQuAh7FOEpW1e80FQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BifGdc_0A0kaBXi1XM5NtBBX5RiGFhVWWA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebYi2Gm4t6Na8sz9Z8bqo1FZNLtKqp2S7cQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvfTxHcQwV1FLGzwoUnlxRibjlgbF2SSzvA&usqp=CAU",
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Ferrari/F8-Tributo/7945/1598599471404/front-left-side-47.jpg"
];
var j=0;
function carFunc(){
    j++;
    if(j==5){
        j=0;
    }
    document.getElementById("car_img").src = srcs[j];
}

