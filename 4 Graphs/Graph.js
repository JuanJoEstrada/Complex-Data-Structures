// Graph class that support directed, undirected, weighted, and unweighted graphs.
const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {

  constructor(isWeighted = false, isDirected = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
    this.isDirected = isDirected
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;
    if (!(vertexOne instanceof Vertex && vertexTwo instanceof Vertex)) throw new Error('VertexOnde and VertexTwo must be Vertex')
    // Only want to create one edge that points in one direction between two vertices for directed graphs.
    vertexOne.addEdge(vertexTwo, edgeWeight);
    if (!this.isDirected) vertexTwo.addEdge(vertexOne, edgeWeight);
  }

  removeEdge(vertexOne, vertexTwo) {
    if (!(vertexOne instanceof Vertex && vertexTwo instanceof Vertex)) throw new Error('VertexOnde and VertexTwo must be Vertex')
    vertexOne.removeEdge(vertexTwo)
    if (!this.isDirected) vertexTwo.removeEdge(vertexOne)
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter(v => v !== vertex);
  }

  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach(vertex => vertex.print());
  }

}

// Test

/*
const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');
// trainNetwork.removeVertex(atlantaStation)

trainNetwork.addEdge(atlantaStation, newYorkStation)
// trainNetwork.removeEdge(atlantaStation, newYorkStation)
*/

/*
// Weighted
const trainNetwork = new Graph(true);
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');
trainNetwork.addEdge(atlantaStation, newYorkStation, 800)
trainNetwork.print();
*/

/*
// Directed
const trainNetwork = new Graph(false, true);
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');
trainNetwork.addEdge(atlantaStation, newYorkStation);
// trainNetwork.removeEdge(atlantaStation, newYorkStation);
*/

// Metro of Mexico
const trainNetwork = new Graph(true, true)

const ecatepec = trainNetwork.addVertex('Ecatepec')
const ciudadAzteca = trainNetwork.addVertex('Ciudad Azteca')
const sanLazaro = trainNetwork.addVertex('San Lazaro')
const guerrero = trainNetwork.addVertex('Guerrero')
const insurgentes = trainNetwork.addVertex('Insurgentes')
const observatorio = trainNetwork.addVertex('Observatorio')

trainNetwork.addEdge(ciudadAzteca, ecatepec, 400)
trainNetwork.addEdge(ecatepec, ciudadAzteca, 400)
trainNetwork.addEdge(sanLazaro, insurgentes, 1800)
trainNetwork.addEdge(insurgentes, sanLazaro, 1800)
trainNetwork.addEdge(observatorio, insurgentes, 1000)
trainNetwork.addEdge(insurgentes, observatorio, 1000)
trainNetwork.addEdge(ecatepec, guerrero, 2100)
trainNetwork.addEdge(guerrero, ecatepec, 2100)
trainNetwork.print()
console.log('......................................')
trainNetwork.removeEdge(sanLazaro, insurgentes)
trainNetwork.removeEdge(insurgentes, observatorio)
trainNetwork.removeEdge(observatorio, insurgentes)
trainNetwork.removeVertex(observatorio)
trainNetwork.print()


trainNetwork.print();