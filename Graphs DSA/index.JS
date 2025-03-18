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
  removeVertex(vertex1) {
    while (this.adjacencyList[vertex1]) {
      const adjacencyList = this.adjacencyList[vertex1].pop();
      this.removeEdges(adjacencyList, vertex1);
    }
    delete this.adjacencyList[vertex1];
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
