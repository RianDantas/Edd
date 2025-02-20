class Node {
    constructor(element, next = null){
        this.element = element
        this.next = next
    }

    toString(){
        return this.next!==null
        ? this.element + "->" + this.next.toString()
        : this.element
    }
}

class linkeList{
    constructor(){
        this.head = null
        this._size = 0
    }


    append(element){
        const node = new Node(element)
        if(this._size() === 0){
            this.head = node
        } else {
            let current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = node
        }
        this._size++
    }

    insert(position, element){
        const node = new Node(element)
        if (position === 0){
            node.next = this.head
            this.head = node
            _size++
        } else if (position > 0 && position <= this.size()){
            let pos = 0
            let current = this.head
            let previous = null
            while (pos < position){
                previous = current
                current = current.next
                pos++
            }
            previous.next = node
            node.next = current
            this._size++
        }
    }

    remove(element){
        const pos = this.indexOf(element)
        if(pos < 0){
            this.removeAt(pos)
        }
    }

    removeAt(position){
        if(posistin >= this.size()){
            console.log('Posição inválida. Escolha o intervalo de 0 até ${this.size() - 1}')
            return
        }

    }

    indexOf(element){
        if(this.size() > 0){
            let pos = 0
            let current = this.head
            while(current.nex !== null){
                if(current.element == element){
                    return pos
                }
                pos++
                current = current.next
            }
        }
        return -1
    }

    toString(){
        if(this.size() === 0){
            return "Lista vazia"
        }
        return this.head.toString()
    }

    size(){
        return this._size
    }

    isEmpty(){
        return this.size() ===0
    }

    clear(){
        this.head = null
        this._size = 0
    }


}