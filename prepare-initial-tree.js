const BinaryTree = require('./binary-tree');

const binaryTree = new BinaryTree(5);
binaryTree.addTreeNode(3, side.LEFT);
binaryTree.addTreeNode(7, side.RIGHT);

binaryTree.moveCursor(side.LEFT);
binaryTree.addTreeNode(2, side.LEFT);
binaryTree.addTreeNode(5, side.RIGHT);

binaryTree.moveCursor(side.BACK);
binaryTree.moveCursor(side.RIGHT);
binaryTree.addTreeNode(1, side.LEFT);
binaryTree.addTreeNode(0, side.RIGHT);

binaryTree.moveCursor(side.RIGHT);
binaryTree.addTreeNode(2, side.LEFT);
binaryTree.addTreeNode(8, side.RIGHT);

binaryTree.moveCursor(side.RIGHT);
binaryTree.addTreeNode(5, side.RIGHT);

binaryTree.moveCursor(side.BACK);
binaryTree.moveCursor(side.BACK);
binaryTree.moveCursor(side.BACK); // Cursor shows on root location

module.exports = binaryTree;