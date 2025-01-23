const queue = []

function enqueue(value){
    return queue.push(value)
}

function dequeue(){
    return queue.shift()
}

function front(){
    if(queue.length === 0){
        return null
    }
}

function size(){
    return queue.length === 0
}

function printQueue(){
    console.log(queue)
}




// function mostrarResultado(){
//     document.querySelector('#resultado').innerHTML = ;
// }


function clickEnqueue(){
    let valor = document.getElementById('num').value;
    enqueue(valor)
}

function clickDequeue(){
    dequeue()
}

function clickFront(){
    front()
}

function clickSize(){
    console.log(size())
}

function clickPrint(){
    document.querySelector('#resultado').innerHTML = printQueue();
}
