class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }
    return undefined;
  }

  BST() {
    let queue = [],
      result = [],
      node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      result.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
  insert(value) {
    let node = new Node(value);
    if (this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = value;
          return this;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = value;
          return this;
        }

        current = current.right;
      }
    }
  }
  DepthFirstPreOrder(root = this.root, data = []) {
    if (!root) return data;
    data.push(root);
    this.DepthFirstPreOrder(root.left);
    this.DepthFirstPreOrder(root.right);
    return data;
  }

  DepthFirstPostOrder(root = this.root, data = []) {
    if (!root) return data;

    this.DepthFirstPreOrder(root.left);
    this.DepthFirstPreOrder(root.right);
    data.push(root);
    return data;
  }

  DepthFirstInOrder(root = this.root, data = []) {
    if (!root) return data;

    this.DepthFirstPreOrder(root.left);
    data.push(root);
    this.DepthFirstPreOrder(root.right);

    return data;
  }
}

//         8
//    4          12
// 3    5     10    20

let tree = new BinarySearchTree();
