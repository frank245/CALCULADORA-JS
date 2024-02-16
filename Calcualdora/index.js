const txtOp1 = document.getElementById("Op1")
const txtOperacion = document.getElementById("Operacion")
const txtOp2 = document.getElementById("Op2")
const btnCalcular= document.getElementById("calcular")
const pResultado = document.getElementById("Resultado")

btnCalcular.addEventListener("click" , calcular)

function calcular(){
    const operacion = txtOperacion.value
     const op1 = parseFloat (txtOp1.value)
     const op2 = parseFloat (txtOp2.value)

   if(operacion == "+" || operacion == "-"  || operacion == "*" || operacion =="/" || !isNaN(op1)  && !isNaN(op2))
    {  
         let resultado;
        switch(operacion){
            case "+" :
            resultado = op1 + op2
            break;
            case "-" :
            resultado = op1 - op2
            break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1/op2
                break
       }
    
       pResultado.innerText = "= " + resultado
    }else{
        pResultado.innerText = "calculo imposible"
    }
}

// Nunca COnfiar en el Usuario para hacer ciertas
