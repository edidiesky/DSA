class TrieNode {
  constructor() {
    this.isEndOfWord = false;
    this.children = new Array(26).fill(n);
  }
}

class PrefixTree {
  constructor() {
    this.trie = new TrieNode()
  }

  insert(word) {
    let curr = this.trie()
    for(let char of word) {
        let index = char.charCodeAt(0) - "a".charCodeAt(0)
        if(curr.children[index] === null) {
            let newNode = new TrieNode()
            curr.children[index] = newNode
        }
        curr = curr.children[index]
    }
    curr.isEndOfWord = true
  }
}


// 6
