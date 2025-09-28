// Created a weighted graph
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) this.adjacencyList.add(vertex, []);
  }
  addEdges(vertex1, vertex2, weight) {
    if (this.adjacencyList.get(vertex1)) {
      this.adjacencyList.get(vertex1).push({ weight, vertex2 });
    }
    if (this.adjacencyList.get(vertex2)) {
      this.adjacencyList.get(vertex2).push({ weight, vertex1 });
    }
  }

  Dijkstras(start, finish) {
    // NODE
    const node = new PriorityQueue()
    const previous = {};
    const distance = {};
    for(let next in this.adjacencyList) {
        if(vertex === start) {
            distance[vertex] = 0
        } else {
            distance[vertex] = Infinity
        }
    }
  }
}
