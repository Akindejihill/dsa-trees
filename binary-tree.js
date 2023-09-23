/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function minDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;       //niether side has children
      if (node.left === null) return minDepthHelper(node.right) + 1; //left side has no children
      if (node.right === null) return minDepthHelper(node.left) + 1; //right side has no children
      return (
        //both sides have children: return minimum result of putting both sides though minDepthHelper
        Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1 
      );
    }

    return minDepthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function maxDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;       //niether side has children
      if (node.left === null) return maxDepthHelper(node.right) + 1; //left side has no children
      if (node.right === null) return maxDepthHelper(node.left) + 1; //right side has no children
      return (
        //both sides have children: return minimum result of putting both sides though minDepthHelper
        Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1
      );
    }

    return maxDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}


const testNode = new BinaryTreeNode(0, [new BinaryTreeNode(1, [new BinaryTreeNode(10, []), new BinaryTreeNode(100, [])]), 
                                  new BinaryTreeNode(2, [new BinaryTreeNode(20, []), new BinaryTreeNode(200, [])]), 
                                  new BinaryTreeNode(3, [new BinaryTreeNode(30, []), new BinaryTreeNode(300, [])]), 
                                  new BinaryTreeNode(4, [new BinaryTreeNode(40, []), new BinaryTreeNode(400, [])]), 
                                  new BinaryTreeNode(5, [new BinaryTreeNode(50, []), new BinaryTreeNode(500, [])]), 
                                  new BinaryTreeNode(6, [new BinaryTreeNode(60, []), new BinaryTreeNode(600, [])]), 
                                  new BinaryTreeNode(7, [new BinaryTreeNode(70, []), new BinaryTreeNode(700, [])]), 
                                  new BinaryTreeNode(8, [new BinaryTreeNode(80, []), new BinaryTreeNode(800, [])]), 
                                  new BinaryTreeNode(9, [new BinaryTreeNode(90, []), new BinaryTreeNode(900, [])]), 
                                ]);
                                
const testTree = new BinaryTree(testNode);

module.exports = { BinaryTree, BinaryTreeNode };
