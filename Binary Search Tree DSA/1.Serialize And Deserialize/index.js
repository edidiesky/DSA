class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  /**
   * Tree -> String
   * null -> "null"
   */
  Serialize(root) {
    // root = [20,14,30,11,15,25,35,null, null, null, 17, null, null, 24, null]
    if (!root) return "null";
    let queue = [root],
      result = [];
    while (queue.length > 0) {
      let node = queue.shift();
      if (node) {
        result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      } else {
        result.push("null");
      }
    }
    return result.join(",");
  }
  DeSerialize(data) {
    /**
     * string -> array (tree)
     */
    if (data === "null") return null;
    let nodes = data.split(",");
    let root = new TreeNode(Number.parseInt(nodes[0]));
    let queue = [root];
    let i = 0;
    while (queue.length > 0) {
      let node = queue.shift();
      if (node !== "null") {
        node.left = new TreeNode(Number.parseInt(nodes[i]));
        queue.push(node.left);
      }
      i++;

      if (node !== "null") {
        node.right = new TreeNode(Number.parseInt(nodes[i]));
        queue.push(node.right);
      }
      i++;
    }
    return root;
  }
}
