class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    const currRoot = this.root;
    while (true) {
      if (currRoot.value === value) return undefined;
      if (currRoot.value < value) {
        if (!currRoot.right) {
          currRoot.right = node;
          return this;
        }
        currRoot = currRoot.right;
      } else {
        if (!currRoot.left) {
          currRoot.left = node;
          return this;
        }
        currRoot = currRoot.left;
      }
    }
  }
  find(value) {
    if (!this.root) {
      return undefined;
    }
    const currRoot = this.root;
    while (currRoot) {
      if (currRoot.value === value) return currRoot;
      if (currRoot.value < value) {
        currRoot = currRoot.right;
      } else {
        currRoot = currRoot.left;
      }
    }
    return undefined;
  }
  BFT() {
    if (!this.root) return [];
    let queue = [this.root],
      result = [];
    while (queue.length !== 0) {
      const node = queue.shift();
      result.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
}
