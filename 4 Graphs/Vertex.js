const Edge = require('./Edge.js');

class Vertex {

  constructor(data) {
    // When a vertex is first created, it should hold any given data, and it should have an empty list of edges because it does not have any connections
    this.data = data
    this.edges = []
  }
  
  print() {
    const edgeList = this.edges.map(edge => edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data) || [];
    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

module.exports = Vertex;