// Graph class that support directed, undirected, weighted, and unweighted graphs.
const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {

 constructor() {
   this.vertices = []
 } 

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter(e => e !== vertex)
  }

  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach(vertex => vertex.print());
  }
}

// Test

const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');
trainNetwork.removeVertex(atlantaStation)

trainNetwork.print();