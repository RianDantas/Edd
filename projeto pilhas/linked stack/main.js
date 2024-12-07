class Node{
    constructor(value){
        this.value = value
        this.prev = null
    }
}

class linkedStack{
    constructor(){
        this.top = null
    }

    push(value){
        const node = new Node(value)

        if(this.isEmpty()){
            this.top = node
        }else{
            node.prev = this.top
            this.top = node
        }
    }

    pop(){
        if(this.isEmpty()){
            console.log("Vazia")
            return null
        }else{
            const value = this.top.value
            this.top = this.top.prev
            return value
        }
    }

    isEmpty(){
        return this.top === null
    }

    peek(){
        if(this.isEmpty()){
            console.log("Vazia")
            return null
        }
        return this.top.value
    }

    size(){
        let temp = this.top
        let _size = 0
        while(temp !== null){
            _size += 1
            temp = temp.prev
        }
        return _size
    }


}

const s = new linkedStack()


function clickPush(){
    let value = document.getElementById('num').value;
    s.push(value)
    
}

function clickPop(){
    s.pop()
}

function clickPeek(){
    console.log(s.peek())
}

function clickIsEmpty(){
    console.log(s.isEmpty())
}

function clickSize(){

    console.log(s.size())
}

