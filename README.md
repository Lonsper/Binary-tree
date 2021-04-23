# Calculating sum, arithmetic mean and median values in binary trees and its subtrees

## Installation 
Download node_modules  
```bash
npm install
```

Run tests
```bash
npm test
```

Run application
```bash
node app.js
```

## Moving around the tree
In the app.js you can move the cursor and limit the main tree to subtrees. The direction of the cursor movement is decided by the `site` variable.
```javascript
module.exports = side = {
    LEFT: 0,
    RIGHT: 1,
    BACK: 2
}

binaryTree.moveCursor(side.LEFT); // Move cursor to left leaf of tree
binaryTree.moveCursor(side.RIGHT); // Move cursor to right leaf of tree
binaryTree.moveCursor(side.BACK); // Move cursor to parent of leaf
```