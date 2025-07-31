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
    /**
     * Check if there's a root
     * if no root, new root becomes node
     * if a root exists, we will traverse over
     * we will check if the, if the val is same as root value return undefined
     * if it is less, we will check for 2 prop
     * check if the left val
     *
     */
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
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

  insert(value) {
    /**
     * Create a node
     * If no root, make the node to become the root
     * if the curr root is less than value, check if the curr root has a value
     * if not, make the curr left section to reflect the new, else update the current section
     * if the curr root is > than value, check if the curr root has a value
     * if not, make the curr right section to reflect the new, else update the current section
     */
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let curr = this.root;
    while (true) {
      if (curr.value === value) return undefined;
      if (curr.value < value) {
        if (!curr.left) {
          curr.left = node;
          return this;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = node;
          return this;
        }
        curr = curr.right;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
    let curr = this.root;
    while (curr) {
      if (curr.value === value) return curr;
      if (curr.value < value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return undefined;
  }
  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    while (true) {
      let curr = this.root;
      if (curr.value === value) return undefined;
      if (curr.value < value) {
        if (!curr.right) {
          curr.right = node;
          return this;
        }
        curr = curr.right;
      } else {
        if (!curr.left) {
          curr.left = node;
          return this;
        }
        curr = curr.left;
      }
    }
  }

  find(value) {
    
  }
}
