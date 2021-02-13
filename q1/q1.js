function isPrime(val){
    const limit =  Math.sqrt(val)
    for(let i = 2; i <= limit; i++)
        if(val % i === 0) return false; 
    return true;
}

function isFibonacci(val){

    let current = 1
    let prev = 0
    while(1){
        let temp = current
        current = current + prev
        prev = temp     
        if(current == val){
            return true
        }
        if(current > val){
            return false
        }
    }
    return false
}


document.addEventListener("DOMContentLoaded", function() {
    
    let number = 0;
    let formula = "isPrime";

    const input = document.getElementById("input")
    const calculation = document.getElementById("calculation")
    const output = document.getElementById("output")

    const calculator = (val)=>{
        if(formula === "isPrime")
            output.textContent = isPrime(val)
        else if(formula === "isFibonacci")
            output.textContent = isFibonacci(val)
    }

    input.addEventListener( "keyup", (e) =>{
        number = Math.round(Number(e.target.value, 10))
        if(number < 0 )
            number = 1
            
        calculator(number)
    })

    calculation.addEventListener("change", (e) => {
        formula = e.target.value
        calculator(number)
    })


})