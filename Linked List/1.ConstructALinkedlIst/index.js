class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  getLinkedList(index) {
    // check for valid index
    if (index < 0 || index > this.size) return -1;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }
  addNodeAtStart(value) {
    // create  a new node
    const newNode = new Node(value);
    // swap the head to be the new Node
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    // increment the size
    if (this.size === 0) this.tail = newNode;
  }
  addNodeAtTail(value) {
    // create  a new node
    const newNode = new Node(value);
    // swap the head to be the new Node
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  insertNode(value, index) {
    // create  a new node
    if (index < 0 || index > this.size) return;
    // insert at begining if, idx = 0
    if (index === 0) {
      this.addNodeAtStart(value);
      return;
    }
    // insert at end if, idx = this.size
    if (index === this.size) {
      this.addNodeAtTail(value);
      return;
    }
    // swap the head to be the new Node
    const currentNode = this.getLinkedList(index - 1);
    const newNode = new Node(value);
    newNode.next = currentNode;
    currentNode.next = newNode;
    return;
  }

  deleteNode(index) {
    // create  a new node
    if (index < 0 || index > this.size) return;
    // insert at begining if, idx = 0
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      if (this.size === 0) this.tail = null;
      return;
    }

    // swap the head to be the new Node
    const currentNode = this.getLinkedList(index - 1);
    currentNode.next = currentNode.next.next;
    this.size--;
    if (index === this.size - 1) this.tail = currentNode;
    return;
  }
  rotateALinkedList(k) {

  }
}

// rotating a linkedlist

// 1-> 2 -> 3 -> 4 -> 5 -> 6-> 7
//
