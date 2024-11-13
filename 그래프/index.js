class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

    if (this.adjacencyList[vertex1].find((vartex) => vartex === vertex2)) {
      return;
    } else {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (this.adjacencyList[vertex2].find((vartex) => vartex === vertex1)) {
      return;
    } else {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
  }
  removeVertex(vertex) {
    /* forEach 문 사용 방법 */
    /*
    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(vertex, v);
    });

    delete this.adjacencyList[vertex];
    */

    while (this.adjacencyList[vertex].length) {
      const adjancencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjancencyVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();

g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");

g.addEdge("Tokyo", "Dallas");
g.addEdge("Dallas", "Aspen");

g.removeVertex("Tokyo");
console.log(g);
