class Node {
    constructor(element, next = null, prev = null){
        this.element = element
        this.next = next
        this.prev = prev
    }

    toString(){
        if (this.next !== null) {
            return this.element + "->" + this.next.toString()
        } else {
            return this.element
        }
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this._size = 0
    }

    append(element){
        const node = new Node(element)
        if (this.size() === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this._size++
    }

    insert(position, element){
        const node = new Node(element)
        if (position === 0) {
            node.next = this.head

            if (this.size() === 0) {
                this.tail = node
            }
            this._size++
        } else if (position > 0 && position <= this.size()) {
            let pos = 0
            let current = this.head
            while (pos < position) {
                current = current.next
                pos++
            }
            node.next = current
            node.prev = current.prev
            if (current.prev) {
                current.prev.next = node
            }
            current.prev = node
            this._size++
        }
    }

    remove(element){
        const pos = this.indexOf(element)
        if (pos >= 0) {  
            this.removeAt(pos)
        }
    }

    removeAt(position){
        if (position >= this.size()) {
            console.log(`Posição inválida. Escolha o intervalo de 0 até ${this.size() - 1}`)
            return
        }

        if (position == 0) {
            this.head = this.head.next
            this._size--

        } else if (position > 0 && position < this.size()) {
            let pos = 0
            let current = this.head
            while (pos < position) {
                current = current.next
                pos++
            }
            
            this._size--
        }
    }

    indexOf(element){
        if (this.size() > 0) {
            let pos = 0
            let current = this.head
            while (current !== null) {
                if (current.element == element) {
                    return pos
                }
                pos++
                current = current.next
            }
        }
        return -1
    }

    toString(){
        if (this.size() === 0) {
            return "Lista vazia"
        }
        return this.head.toString()
    }

    size(){
        return this._size
    }

    isEmpty(){
        return this.size() === 0
    }

    clear(){
        this.head = null
        this.tail = null
        this._size = 0
    }
}
