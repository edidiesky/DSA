class ListNode {
    constructor(value) {
        this.value = value
        this.next= null
        this.prev= null
    }
}
class DoubleLinkedlIst {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    } 
    addAtHead(val){
        const newNode = new Node(val)
        if(this.size === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++
    }
    addAtTail(val){}
    insertNode(val){}
    removeNode(val){}
}