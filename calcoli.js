function calcolo(){
var peso=document.forms.BMI.peso.valuesAsNumber;
var altezza=document.forms.BMI.altezza.valueAsnumber;
var sesso=document.forms.BMI.sesso.value;
if(sesso="m"){
var totale=peso/(altezza*altezza);
7/*Math.pow(base,exp)
*Math.pow(altezza,2)*/
document.getElementById('calcola').innerHTML="BMI="+totale;
}
else if(sesso="f"){
var totale=(peso/(altezza*altezza)*0.9;
document.getElementById('calcola').innerHTML="BMI="+totale;
}


function cancella(){
document.getElementById('calcola').innerHTM=" ";

}




/*calcoli per la app BMI*/
function calcolo(){
	//identificare i dati del form
	var peso=document.forms.bmi.peso.value;
	var altezza=document.forms.bmi.altezza.value;
	var sesso=document.forms.bmi.sesso.value;
	//verifico se l'utenete è m o f
if(sesso='m'){
	//applico al formula BMI per m
	var res=;
	}
else{
	//applico al formula BMI per f
	var res=;
	}
	var risultato=getElementById('risultato');
	risultato.innerHTML="BMI = "+"res;
}
function annulla(){


}
