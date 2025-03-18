class Graphs {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdges(v1, v2) {
    if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
    if (!this.adjacencyList[v2]) this.adjacencyList[v2] = [];
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdges(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  depthFirst(vertex1) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    }
    dfs(vertex1);
    return result;
  }
  breadthFirst(vertex) {
    const queue = [vertex];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[vertex] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
  depthFirst(vertex1) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    }
    dfs(vertex1);
    return result;
  }
  depthFirst(vertex1) {
    let result = [];
    let queue = [vertex1];
    let visited = {};
    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex]) {
      for (let neighbour of this.adjacencyList[vertex]) {
        this.removeEdges(neighbour, vertex);
      }
    }
    delete this.adjacencyList[vertex];
  }
  depthFirst(vertex1) {
    let result = [];
    let visited = new Set();
    const adjacencyList = this.adjacencyList[vertex1];
    function dfs(vertex) {
      if (!vertex) {
        return null;
      }
      visited.add(vertex);
      result.push(vertex);
      for (let neigbour of adjacencyList) {
        if (!visited.has(neigbour)) {
          return dfs(neigbour);
        }
      }
    }
    dfs(vertex1);
    return result;
  }
  breadthFirst(vertex) {
    if (!vertex) return null;
    let queue = [vertex];
    let result = [];
    let visited = new Set();
    visited.add(vertex);

    while (queue.length) {
      const shiftedVertex = queue.shift();
      result.push(node);
      for (let neigbour of this.adjacencyList[shiftedVertex]) {
        if (!visited.has(neigbour)) {
          visited.add(neigbour);
          queue.push(neigbour);
        }
      }
    }
    return result
  }
}
let g = new Graphs();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Lagos");
g.addVertex("Uyo");
g.addVertex("London");
g.addVertex("Ghana");
g.addVertex("Nairobi");
g.addVertex("New York");

g.addEdges("Dallas", "Uyo");
g.addEdges("Uyo", "Lagos");
g.addEdges("Uyo", "Ghana");
g.addEdges("Uyo", "Nairobi");
g.addEdges("Uyo", "Tokyo");
g.addEdges("Uyo", "New York");

// g.removeEdges("Uyo", "Lagos")
console.log("Adjacency List", g);
g.removeVertex("Uyo");
console.log("New Adjacency List", g);
