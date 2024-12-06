class Stack{
    constructor(){
        this.stack = [];
    }

    push(valor) {
        this.stack.push(valor);
    }

    pop() {
        this.stack.pop();
    }

    peek() {
        return this.stack[this.size() - 1];
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.stack.length
    }
}

const s = new Stack();

function mostrarPilha(){
    document.querySelector('#resultado').innerHTML = "<div> Resultado: " + s.stack + " </div>";
}

function clickPush(){
    let valor = document.getElementById("num").value;
    s.push(valor)
    mostrarPilha()
}

function clickPop(){
    s.pop()
    mostrarPilha()
}

function clickIsEmpty(){
    s.isEmpty();
}

function clickPeek() {
    let p = s.peek()
    document.querySelector('#tamanho').innerHTML = "Último elemento " + p;
}

function clickSize(){
    let p = s.size()
    document.querySelector('#tamanho').innerHTML = "Último elemento " + p;
}


