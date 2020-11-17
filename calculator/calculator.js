var numfield1 = document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');
var resultfield = document.getElementById('resultfield');
var form = document.getElementById('xiswhatpercentageofy');

form.addEventListener('submit',function(Event){
    if(!numfield1.value || !numfield2.value ){
        alert("please enter the value in the firelds");
                
     }else{
         var x = parseFloat(numfield1.value);
         var y = parseFloat(numfield2.value);
         
         var result = x / y;
         var percent = result * 100;
         
         resultfield.innerText = "answer =" + percent + "%";
         event.preventDefault();
     }
});