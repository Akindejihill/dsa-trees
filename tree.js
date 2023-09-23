/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

/**
 * Processes every node in the tree using the callback function passed to it.
 * @param {*} callBack A callback function which requires the arguments (accum, currentNode).  
 * Accum is the result carried over from each process, and must be returned 
 * inorder to carry an accumulated value over to each node durring processing
 * currentNode is the node being processed.  Access it's value with currentNode.val.
 * Access its children with currenNode.children which is an array.
 * @returns 
 */
  process(callBack) {
    let toVisitStack = [this.root];
    let accum = 0;

    while (toVisitStack.length) {
      let currentNode = toVisitStack.pop();

      accum = callBack(accum, currentNode);      

      for (let child of currentNode.children) 
        toVisitStack.push(child)
    }
    return accum;
  }


  sumValues(){
    return this.process((accum, currentNode) => {return accum += currentNode.val;});
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    return this.process((accum, currentNode) => {return currentNode.val % 2 === 0 ? accum += 1 : accum;});
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    return this.process((accum, currentNode) => {return currentNode.val > lowerBound ? accum += 1 : accum;});
  }
}

// //pre-testing
// const testNode = new TreeNode(0, [new TreeNode(1, [new TreeNode(10, []), new TreeNode(100, [])]), 
//                                   new TreeNode(2, [new TreeNode(20, []), new TreeNode(200, [])]), 
//                                   new TreeNode(3, [new TreeNode(30, []), new TreeNode(300, [])]), 
//                                   new TreeNode(4, [new TreeNode(40, []), new TreeNode(400, [])]), 
//                                   new TreeNode(5, [new TreeNode(50, []), new TreeNode(500, [])]), 
//                                   new TreeNode(6, [new TreeNode(60, []), new TreeNode(600, [])]), 
//                                   new TreeNode(7, [new TreeNode(70, []), new TreeNode(700, [])]), 
//                                   new TreeNode(8, [new TreeNode(80, []), new TreeNode(800, [])]), 
//                                   new TreeNode(9, [new TreeNode(90, []), new TreeNode(900, [])]), 
//                                 ]);
//
// const testTree = new Tree(testNode);
// const sum = testTree.sumValues();
// const evens = testTree.countEvens();
// const superiors = testTree.numGreater(800);


module.exports = { Tree, TreeNode };
