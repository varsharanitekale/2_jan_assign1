let inputvalue=document.getElementById("inttext");

let p=document.createElement("p");
let d=document.getElementById("d");



let btn=document.getElementById("btn");

btn.addEventListener('click', function(){
let fact=inputvalue.value;
    
    
    function factorial(num) {
        if (num < 0) {
            throw new Error("num must not be negative");
        }
        if (num <= 1) {
            // Both 1! and 0! are defined as 1
            return 1;
        }
        return num * factorial(num - 1);
    }
    // console.log(factorial(fact)); // 120
    p.innerHTML=factorial(fact);
    d.appendChild(p);

    
 


    })
    


