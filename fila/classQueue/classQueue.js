class Node{
    constructor(value,next){
        this.value = value;
        this.next = next
    }
}

class LinkedQueue{
    constructor(){
        this._front = null
        this._tail = null
        this._size = 0
    }

    size(){
        return this._size
    }

    enqueue(value){
        const node = new Node(value,null)
        if(this._size === 0){
            this._front = node
            this._tail = node
        }else{
            this._tail.next = node
            this._tail = node
        }
        this._size++
        
    }

    dequeue(){
        if(this._size === 0){
            return "Fila vazia"
        }else{
            const value = this._front.value
            this._front = this._front.next
            this._size--
            return value
        }
    }

    front(){
        if(this.isEmpty()){
            return "Fila vazia"
        }else{
            return this._front.value
        }            
            
    }

    isEmpty(){
        return this._size === 0
        
    }

    tail(){
        return this._tail.value
    }

    print(){
        let temp = this._front
        while (temp != null){
            console.log(temp.value)
            temp = temp.next
        }
    }

    toArray(){
        let array = [] 
        
        let temp = this._front
        while (temp != null){
            array.push(temp)
            temp = temp.next
        }

        return array
    }


}