class WeightedGraphs {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdges(v1, v2,weight) {
      if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
      if (!this.adjacencyList[v2]) this.adjacencyList[v2] = [];
      this.adjacencyList[v1].push({node:v2, weight});
      this.adjacencyList[v2].push({node:v1, weight});
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
  