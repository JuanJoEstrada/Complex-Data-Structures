class Node {

  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node || node === null)) throw new Error ('Next node must be a member of the Node class');
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) newHead.setNextNode(currentHead);
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {

      this.head = new Node(data);

    } else {

      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));

    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) return null;
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let outPut = '<head> ';
    while (currentNode !== null) {
      outPut += `${currentNode.data} `;
      currentNode = currentNode.getNextNode();
    }
    outPut += '<tail>';
    console.log(outPut);
  }

}

module.exports = LinkedList