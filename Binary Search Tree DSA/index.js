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

  /** 
   * tHIS IS BAD? SINCE IT DOES NOT TRAVERSE DEEPLY.
  */
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
      if (current.val < value) {
        current = current.left;
      } else if (current.val > value) {
        current = current.right;
      } else {
        return current;
      }
      return undefined;
    }
  }
  BFT() {
    if (!this.root) return [];
    let queue = [root],
      result = [];
    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node.val);
      if (node.left) result.push(node.left);
      if (node.right) result.push(node.right);
    }
    return result;
  }
  DepthFirstPreOrder(root = this.root, data = []) {
    if (!root) return data;
    data.push(root);
    this.DepthFirstInOrder(root.left, data);
    this.DepthFirstInOrder(root.right, data);
    return data;
  }

  DepthFirstPostOrder(root = this.root, data = []) {
    if (!root) return data;
    this.DepthFirstInOrder(root.left, data);
    this.DepthFirstInOrder(root.right, data);
    data.push(root);
    return data;
  }

  DepthFirstInOrder(root = this.root, data = []) {
    if (!root) return data;
    this.DepthFirstInOrder(root.left, data);
    data.push(root);
    this.DepthFirstInOrder(root.right, data);
    return data;
  }
  insert(value) {
    // get the node
    const node = new Node(value)
    if(!this.root) {
      this.root = node
      return this
    } else {
      let curr = this.root
      if(value === curr) return
      if(value < curr.value) {
        if(!curr.value) {
          curr.left = node
          return
        }
        curr = curr.left
      } else {
        if(!curr.value) {
          curr.right = node
          return
        }
        curr = curr.right
      } 
    }
  }
}

APP("", ()=> {})

//         8
//    4          12
// 3    5     10    20
[8,4,12,3,5,10,20]

let tree = new BinarySearchTree();
