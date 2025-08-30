class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addAtHead(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  //   1-> 2-> 3-> 4-> 6
  addAtTail(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  getNode(index) {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr;
  }
  insertAtIndex(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.addAtHead(value);
      this.size++;
      return;
    }
    if (index === this.size - 1) {
      this.addAtTail(value);
      this.size++;
      return;
    }
    // get the node at the right idex (i -1dx)
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    // 1 -> 2 -> 3 -> 4 -> 6
    let node = new Node(value);
    node.next = curr.next;
    curr.next = node;
    curr.next.prev = node;
    node.prev = curr;
    this.size++;
    return;
  }
  deleteAtIndex(index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      if (this.size == 0) this.tail = null;
      if (this.head) this.head.prev = null;
      this.head = this.head.next;
      this.size--;
      return;
    }
    if (index === this.size - 1) {
      this.tail = this.tail.prev;
      this.size--;
      return;
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
    this.size--;
    return;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
