class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    // if our method to add a child is .addChild(), we want to accommodate calling tree.addChild(3) as well as tree.addChild(new TreeNode(3))
    if (child instanceof TreeNode) {
      this.children.push(child)
    } else {
      this.children.push(new TreeNode(child))
    }
  }

  removeChild(childToRemove) {
    // To know that the target child has been removed from the children array
    const length = this.children.length
    this.children = this.children.filter(child => {
      return childToRemove instanceof TreeNode
      ? child !== childToRemove
      : child.data !== childToRemove;
    })
    if (length === this.children.length) {
      // Recursively call .removeChild() for each child in the children array
      this.children.forEach(child => child.removeChild(childToRemove))
    }
  }

  print(level = 0) {
    let result = '';
    for (let i = 0; i < level; i++) {
      result += '-- ';
    }
    console.log(`${result}${this.data}`);
    this.children.forEach(child => child.print(level + 1));
  }

  depthFirstTraversal() {
    console.log(this.data)
    this.children.forEach(child => child.depthFirstTraversal())
  }

  breadthFirstTraversal() {
    // current node
    let queue = [this]
    while(queue.length > 0) {
      const current = queue.shift()
      console.log(current.data)
      queue = queue.concat(current.children)
    }
  }

};

module.exports = TreeNode;

// Test

const tree = new TreeNode(1);

tree.addChild(15);
const node = new TreeNode(30);
tree.addChild(node);
tree.print()

tree.removeChild(15)
tree.print()
tree.removeChild(node)
tree.print()

const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree.children[i].addChild(randomize());
  }
}

// add third-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      tree.children[i].children[j].addChild(randomize());
    }
  }
}
tree.print()
tree.depthFirstTraversal()
tree.print()
tree.breadthFirstTraversal()



