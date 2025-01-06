// -------- PUSH

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedlIst {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
  }

  pop() {
    if (!this.head) return null;
    let newHead = this.head;
    let newTail = newHead;
    while (newHead.next) {
      newTail = newHead;
      newHead = newHead.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--; // decrement the length
    // set the head and tail of the last element tp be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return newHead;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  shift() {
    if (!this.head) return null;
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  set(value, index) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.data = value;
      return true;
    }
    return false;
  }
}

const list = new LinkedlIst();
list.push(10);
list.push(20);
list.push(30);

console.log(list);
