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
    this.length--;
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
}

const list = new LinkedlIst();
list.push(14);
list.push(20);
list.push(24);
list.push(30);
list.push(40);
list.push(40);
// const newNode = list.pop();
const newNode = list.get(2);

console.log(list.get(2));
