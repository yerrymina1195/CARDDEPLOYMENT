// let test="Makhan Diakho";
// let nom=document.getElementById('nameofcard')

// nom.innerHTML = test
let hCardNumber= document.getElementById("HcardNumber")
let hZip1=document.getElementById("hZip1");
let hZip3=document.getElementById("hZip3");





const NameOfcard=document.querySelector("#inputtextname");
const pOfNameCard = document.querySelector("#nameofcard")
NameOfcard .addEventListener("input", function(){
    let cardName= NameOfcard.value;
    // console.log( cardName.length);
    
    pOfNameCard.textContent=cardName;
})

const months=document.getElementById("inputZip1");
const pmonths=document.getElementById("month");
months.addEventListener("input",function(){
let monthvalue= months.value;
if(monthvalue == " " || isNaN(monthvalue)){

    months.value= ""
    months.className += "  border-danger"
    hZip1.classList.remove("d-none")

}else{
    months.classList.remove("border-danger");
    pmonths.textContent=monthvalue;
    hZip1.classList.add("d-none")
}

})
const years=document.getElementById("inputZip2");
const pyears=document.getElementById("years");
years.addEventListener("input",function(){
let yearvalue= years.value;
if(yearvalue == " " || isNaN(yearvalue)){
    
    years.className += "  border-danger";
    years.value= ""
}else{
    years.classList.remove("border-danger");
    pyears.textContent=yearvalue
}

})



const $3numbers=document.getElementById("inputZip3");
const p3numbers=document.getElementById("threenum");
$3numbers.addEventListener("input",function(){
let $3numbersvalue= $3numbers.value;
if($3numbersvalue == " " || isNaN($3numbersvalue)){

    $3numbers.className += "  border-danger";
   
    $3numbers.value= ""
    hZip3.classList.remove("d-none")
}else{
    $3numbers.classList.remove("border-danger");
    p3numbers.textContent=$3numbersvalue
    hZip3.classList.add("d-none")
}

})


const numberOfCard = document.querySelector("#card-number");
const pOfnumberCard = document.querySelector("#card-number-output");
numberOfCard.addEventListener("input", function() {
    // Récupérer la valeur de l'input
    let cardNvalue = numberOfCard.value;

    // Vérifier si la valeur est un nombre valide
    if (isNaN(cardNvalue.replace(/\s/g, ""))) {
        // Afficher une alerte si la valeur n'est pas un nombre
         
        numberOfCard.className += "  border-danger";
        hCardNumber.classList.remove("d-none")
        
    } else {
        numberOfCard.classList.remove("border-danger")
        // Insérer un espace après chaque quatrième chiffre
        cardNvalue = cardNvalue.replace(/\s/g, "");
        cardNvalue = cardNvalue.replace(/(\d{4})/g, "$1 ");
        // numberOfCard.value =numberOfCard.value.trim().replace(/(\d{4})/g, "$1 ");
        
        // Mettre à jour la valeur de l'input
        numberOfCard.value = cardNvalue;
        // let moy= [];
        // moy.push(value)
        // let moy2= moy.join('')
        // console.log(moy2);
        // console.log(typeof moy2);
        pOfnumberCard.textContent = numberOfCard.value;
        hCardNumber.classList.add("d-none")
    }
    
    
});

function confirmer(){
let nameca =document.getElementById("inputtextname").value;
let ncard= document.getElementById("card-number").value;
let mcard= document.getElementById("inputZip1").value;
let ycard=document.getElementById("inputZip2").value;
let threeNumber=document.getElementById("inputZip3").value;


if (nameca == "" ) {
   return document.getElementById("inputtextname").className += "  border-danger"
}else if(ncard.length == 0 ){
    return document.getElementById("card-number").className += "  border-danger"
}
else if(isNaN(mcard) || mcard == ""){
    return document.getElementById("inputZip1").className += "  border-danger"
}else if(isNaN(ycard) || ycard == ""){
    return document.getElementById("inputZip2").className += "  border-danger"
}else if(isNaN(threeNumber) || threeNumber == ""){
    return document.getElementById("inputZip3").className += "  border-danger"
}else{
let changedisplay= document.getElementById("gerer");
changedisplay.innerHTML=`
<div>
<p class="text-center"> <i class=" display-2 fas fa-check-circle fatre fa-stack-3x "></i></p>
<h3 class="text-center" >Thank you!</h3>
  <h4 class="text-muted ">We've added your card details </h4>
  <form class=" text-center">
    <button type="submit" onclick="continuer()" id="continue" class="btn  btn-lg w-100 boutonconf">Continue</button>
  </form>
</div>
`

}
console.log(mcard);





}
function continuer() {
    document.location.reload
}
