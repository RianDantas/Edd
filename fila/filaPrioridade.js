class Node{
    constructor(value, priority, next){
        this.value = value;
        this.priority = priority;
        this.next = next;
    }
}

class priorityQueu{
    constructor(){
        this._front = null;
        this._tail = null;
        this._size = 0
    }

    isEmpty(){
        return this._size === 0
    }

    enqueue(value, priority){
        const node = new Node(value, priority, null)
        if (this.isEmpty()){
            this._front = node
            this._tail = node
        } else if (this._front.next === null){
            this._front.next = node
        }
        else {
            let temp = this._front
            while(temp.next.priority <= node.priority){
                temp = temp.next
            }
            node.next = temp.next
            temp.next = node
        }
        this._size++
    }

    print(){
        let temp = this._front

    }










}