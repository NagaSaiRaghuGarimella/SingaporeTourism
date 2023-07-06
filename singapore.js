const visit = document.getElementsByClassName("visit");
const persons=document.getElementById("persons");
const preferStay=document.getElementsByClassName("stay");
const stayingDays=document.getElementById("staying");
 let totalCost;
let stayCost;
let disc;
console.log(preferStay);
function getCount(){
    count=0;
    for(let i=0;i<visit.length;i++){
    if(visit[i].checked===true){
           count++;
    }
    }
    console.log(count);
    return count;
}

function getTotalCost(noOfPersons){
    noOfPersons=parseInt(persons.value);
    sum=0;
    for(let i=0;i<visit.length;i++){
        if(visit[i].checked===true){
            costForSelectedPlaces=parseInt(visit[i].value);
            sum+=costForSelectedPlaces;
        }

        }
        totalCost=sum*noOfPersons;
        console.log("total cost "+totalCost);
        return totalCost;
}

function calculateDiscount(){
   let count = getCount();
    let discountPrice= totalCost-(totalCost*15/100);
    disc = count>2?discountPrice:0
   console.log("disc "+disc);
   return disc;
}

function getStayCost(noOfPersons){
    let noOfDaysStay = parseInt(stayingDays.value);
    noOfPersons=parseInt(persons.value);
    for(let i=0;i<preferStay.length;i++){
        if(preferStay[i].checked === true) {
              stayCost=noOfDaysStay*noOfPersons*150;
        }
    }
     console.log("stay "+stayCost);
     if(stayCost !=undefined && disc !=0){
       let totalPrice=disc+stayCost;
        console.log("total disc with stay "+totalPrice);
        document.getElementById("result").innerHTML="Total price with discount and stay price: "+totalPrice;
     }
     else if(stayCost==undefined && disc==0){
        console.log("totalCost with stay without disc "+totalCost);
        document.getElementById("result").innerHTML="Total price without discount and stay price: "+totalCost;

     }
     else if(stayCost==undefined && disc!=0){
         console.log(disc);
         document.getElementById("result").innerHTML="Total price with discount and without stay price: "+disc;
     }
     else{
        totalCostNdisc = totalCost+stayCost;
        console.log(totalCostNdisc);
        document.getElementById("result").innerHTML="Total price without discount and with stay price: "+totalCostNdisc;
     }
     
}

function disableNoOfDaysStay(){
    stayingDays.style.visibility="hidden";
}

const btn = document.getElementById("button");
btn.addEventListener('click', function calculateCost(){
    event.preventDefault();
    getCount();
    getTotalCost(persons);
    calculateDiscount();
    getStayCost(persons);
})