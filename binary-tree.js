const side = require('./constants');
const TreeNode = require('./treeNode');

module.exports = class BinaryTree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue, null);
        this.cursor = this.root;
        this.nodeValues = [];
    }

    addTreeNode(value, currentSide) {
        switch (currentSide) {
            case side.LEFT: this.cursor.nextLeft = new TreeNode(value, this.cursor);
                break;
            case side.RIGHT: this.cursor.nextRight = new TreeNode(value, this.cursor);
                break;
            default: console.log('Wrong side - addTreeNode() error!');
        }
    }

    moveCursor(currentSide) {
        switch (currentSide) {
            case side.LEFT: this.cursor = this.cursor.nextLeft;
                break;
            case side.RIGHT: this.cursor = this.cursor.nextRight;
                break;
            case side.BACK: this.cursor = this.cursor.parent;
                break;
            default: console.log('Wrong direction - moveCursor() error!');
        }
    }

    printTree() {
        this.printAllNodes(this.root);
    }

    printSubtree() {
        this.printAllNodes(this.cursor);
    }

    printAllNodes(node) {
        if (node === null) {
            return;

        } else {
            process.stdout.write(node.value + ' ');
    
            if (node.nextLeft !== null) {
                this.printAllNodes(node.nextLeft);
            }

            if (node.nextRight !== null) {
                this.printAllNodes(node.nextRight);
            } 
        }
    }

    getNodesArray(cursorNode) {
        if (cursorNode === null) {
            return;

        } else {
            if (cursorNode.nextLeft !== null) {
                this.getNodesArray(cursorNode.nextLeft);
            }
        
            if (cursorNode.nextRight !== null) {
                this.getNodesArray(cursorNode.nextRight);
            }

            this.nodeValues.push(cursorNode.value);
        }
    }

    prepareNodesArray() {
        this.nodeValues = [];
        this.getNodesArray(this.cursor);
    }  

    sumSubtreeValues() {
        return this.nodeValues.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        });
    }

    calculateAverageSubtree(sum) {
        return Math.round(sum/this.nodeValues.length * 100) / 100;
    }

    calculateMedianSubtree() {
        const midValue = Math.floor(this.nodeValues.length / 2),
        sortedValues = [...this.nodeValues].sort();
        return this.nodeValues.length % 2 !== 0 ? sortedValues[midValue] : (sortedValues[midValue - 1] + sortedValues[midValue]) / 2;
    }  

    printSubtreeValues() {
        this.prepareNodesArray();
        let sum = this.sumSubtreeValues();
        let average = this.calculateAverageSubtree(sum);
        let median = this.calculateMedianSubtree();

        console.log(
            '\nSum of subtree values - ' + sum,
            '\nAverage of subtree values - ' + average,
            '\nMedian of subtree values - ' + median
        )
    }
}