const BinaryTree = require('./binary-tree');

let bt = new BinaryTree(5);
bt.addNode(3, side.LEFT);
bt.addNode(7, side.RIGHT);

bt.moveCursor(side.LEFT);
bt.addNode(2, side.LEFT);
bt.addNode(5, side.RIGHT);

bt.moveCursor(side.BACK);
bt.moveCursor(side.RIGHT);
bt.addNode(1, side.LEFT);
bt.addNode(0, side.RIGHT);

bt.moveCursor(side.RIGHT);
bt.addNode(2, side.LEFT);
bt.addNode(8, side.RIGHT);

bt.moveCursor(side.RIGHT);
bt.addNode(5, side.RIGHT);

bt.moveCursor(side.BACK);
bt.moveCursor(side.BACK);
bt.moveCursor(side.BACK); // Cursor shows on root location

bt.printSubtree();
bt.printSubtreeValues();