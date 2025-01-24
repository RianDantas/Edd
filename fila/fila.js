const queue = []

function enqueue(value){
    return queue.push(value)
}

function dequeue(){
    return queue.shift()
}

function front(){
    return queue[0]
}

function size(){
    return queue.length
}

function printQueue(){
    console.log(queue)
}




function mostrarResultado(){
    document.querySelector('#resultado').innerHTML = queue
}


function clickEnqueue(){
    let valor = document.getElementById('num').value;
    enqueue(valor)
}

function clickDequeue(){
    dequeue()
}

function clickFront(){
    console.log(front())
    let f = front()
    document.querySelector('#resultado').innerHTML = f
}

function clickSize(){
    console.log(size())
    let t = size()
    document.querySelector('#resultado').innerHTML = t
}

function clickPrint(){
    console.log(printQueue())
    mostrarResultado()
}
