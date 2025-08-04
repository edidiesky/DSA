class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //                3
  // 1 -> 2 -> 3 -> 4 -> 5 -> 6
  // 8 -> 1 -> 2 .....
  // 8 -> 1 -> 2 .....
  // 1 -> 2 -> 3 -> 7 -> 4 -> 5 -> 6
  deleteNodeAtIndex(index) {
    if (index < 0 || index > this.length) return;
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      if (this.length === 0) this.tail = null;
      this.length--;
      return;
    }
    if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.length--;
      return;
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
    this.length--;
    return;
  }
  insertAtIndex(value, index) {
    const node = new Node(value);
    if (index < 0 || index > this.length) return;
    if (index == 0) {
      this.head = node;
      if (!this.tail) this.tail = node;
      node.next = this.head;
      this.length++;
      return;
    }

    if (index == this.length - 1) {
      this.tail = node;
      node.next = this.tail;
      this.length++;
      return;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
    curr.next.prev = node;
    node.prev = curr;
    this.length++;
    return;
  }
  addAtTail(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return;
  }
  addAtHead(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
