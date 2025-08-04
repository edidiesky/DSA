class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  /**
   * getLinkedList
   * addNodeAtStart
   * addNodeAtTail
   * insertNode
   * deleteNode
   */

  getLinkedList(index) {
    if (index < 0 || index > this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.val;
  }

  addNodeAtStart(value) {
    const newNode = new Node(value);
    if (this.size === 0) this.tail = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  addNodeAtTail(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  insert(value, index) {
    // check for edge cases in the index
    // create the new node
    //
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
      this.addNodeAtStart(value);
    }
    if (index === this.size) {
      this.addNodeAtTail(value);
    }
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    let newNode = new Node(value);
    newNode.next = prev.next;
    prev.next = newNode;
    this.size++;
  }
  delete(index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    const prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    if (index === this.size - 1) {
      curr.next = null;
      this.tail = prev;
    } else {
      prev.next = prev.next.next;
    }
    this.size--;
    return;
  }
}
