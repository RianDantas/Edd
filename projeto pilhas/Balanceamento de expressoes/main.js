function mostrarResultado(){
    document.querySelector('#resultado').innerHTML = "Resultado: " + balanceamento();
}

function balanceamento(){
    let input = document.getElementById('input').value;

    const stack = [];

    const simbolos = {
        ')': '(',
        ']': '[',
        '}': '{'
        
    };

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (['(', '{', '['].includes(char)) {
            stack.push(char);


        } else if ([')', '}', ']'].includes(char)) {

            if (stack.length === 0 || stack.pop() !== simbolos[char]) {

                return "Desbalanceada";
            }
        }
    }

    if(stack.length == 0){
        return "Balanceada";
    }
    else{
        return "Desbalanceada";
    }
      
}


function b(){
    console.log(balanceamento());
    mostrarResultado()
}