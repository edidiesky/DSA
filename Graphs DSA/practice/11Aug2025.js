class Graphs {
  constructor() {
    this.adjacencyList = new Map();
  }
  /**
   * addVertex
   * addEdges
   * removeVertex
   * removeEdges
   */
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
  addEdges(v1, v2) {
    // if no vertex, add the vertex
    this.addVertex(v1);
    this.addVertex(v2);
    // if no edges, add the edges
    if (!this.adjacencyList.get(v1).includes(v2)) {
      this.adjacencyList.get(v1).push(v2);
    }
    if (!this.adjacencyList.get(v2).includes(v1)) {
      this.adjacencyList.get(v2).push(v1);
    }
  }
  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) return;
    for (let neigbour of this.adjacencyList.get(vertex)) {
      this.adjacencyList.set(
        neigbour,
        this.adjacencyList.get(neigbour).filter((v) => v !== vertex)
      );
    }
    this.adjacencyList.delete(vertex);
  }
  removeEdges(vertex1, vertex2) {
    if (this.adjacencyList.get(vertex1).includes(vertex2)) {
      const newVertex1 = this.adjacencyList
        .get(vertex1)
        .filter((v) => v !== vertex2);
      this.adjacencyList.set(vertex1, newVertex1);
    }
    if (this.adjacencyList.get(vertex1).includes(vertex2)) {
      const newVertex2 = this.adjacencyList
        .get(vertex2)
        .filter((v) => v !== vertex1);
      this.adjacencyList.set(vertex2, newVertex2);
    }
  }

  depthFirst(vertex) {
    const result = [];
    const visited = new Set();
    // let queue = [vertex];
    function dfs(vertex) {
      if (!vertex) return;
      visited.add(vertex);
      result.push(vertex)
      for(let neigbour of this.adjacencyList.get(vertex)) {
        if(!visited.has(neigbour)) {
            dfs(neigbour)
        }
      }
    }
    dfs(vertex)
    return result;
  }
  breadthFirst(vertex) {
    const queue = [vertex];
    const result = [];
    const visited = new Set();
    visited.add(vertex)
    while(queue.length) {
      const node = queue.shift()
      result.push(node)
      for(let neigbour of this.adjacencyList.get(node)) {
        if(!visited.has(neigbour)) {
          visited.add(neigbour)
          queue.push(neigbour)
        }
      }
    }
    return result;
  }

  
}
