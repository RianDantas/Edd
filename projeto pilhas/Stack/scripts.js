stack = [];

function mostrarPilha(){
    document.querySelector('#resultado').innerHTML = "Resultado: " + stack;
}

function clickPush(){
    let valor = document.getElementById("input").value;
    push(valor);
    mostrarPilha();
}

function clickPop(){
    pop();
    mostrarPilha();
}

function clickIsEmpty(){
    if(isEmpty()){
        document.querySelector('#tamanho').innerHTML = "Está vazio";
    }else{
        document.querySelector('#tamanho').innerHTML = "Não está vazio";
    }
    console.log(isEmpty())
    mostrarPilha();
}

function clickPeek(){
    let n = peek();
    document.querySelector('#tamanho').innerHTML = "Último elemento " + n;
    mostrarPilha();
}

function clickSize(){
    let n = size ();
    if(isEmpty()){
        document.querySelector('#tamanho').innerHTML = "Está vazio";
    }else{
        document.querySelector('#tamanho').innerHTML = "Tamanho " + n;
    }

    mostrarPilha()
}

function push(valor){
    stack.push(valor);   
}

function pop(){
    stack.pop();
}

function peek(valor){
    return stack[stack.length - 1];
}

function isEmpty(){
    return size() === 0;
}

function size(){
    return stack.length;
}




