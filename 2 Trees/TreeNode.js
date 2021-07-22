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
      if (childToRemove instanceof TreeNode) {
        return childToRemove !== child;
      } else {
        return child.data !== childToRemove;
      }
    })
    if (length === this.children.length) {
      // Recursively call .removeChild() for each child in the children array
      this.children.forEach(child => child.removeChild(childToRemove))
    }

  }

};

module.exports = TreeNode;

// Test

const tree = new TreeNode(1);

tree.addChild(15);
const node = new TreeNode(30);
tree.addChild(node);

console.log('Displaying treeNode:', tree)
tree.removeChild(15)
console.log('After removing by data:', tree)
tree.removeChild(node)
console.log('After removing by treeNode:', tree)