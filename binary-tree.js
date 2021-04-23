const side = require('./constants');
const TreeNode = require('./treeNode');

module.exports = class BinaryTree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue, null);
        this.cursor = this.root;
        this.nodesValue = [];
    }

    addTreeNode(value, currentSide) {
        switch (currentSide) {
            case side.LEFT: this.cursor.nextLeft = new TreeNode(value, this.cursor);
                break;
            case side.RIGHT: this.cursor.nextRight = new TreeNode(value, this.cursor);
                break;
            default : console.log('Wrong side - addTreeNode() error!');
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
            default : console.log('Wrong direction - moveCursor() error!');
        }
    }

    printTree() {
        this.printAllNodes(this.root);
    }

    printSubtree() {
        this.printAllNodes(this.cursor);
    }

    printAllNodes(node) {
        if (node != null) {
            process.stdout.write(node.value + ' ');
    
            if (node.nextLeft != null) 
                this.printAllNodes(node.nextLeft);
            
            if (node.nextRight != null)
                this.printAllNodes(node.nextRight);
        } else 
            return;
    }

    getNodesArray(cursorNode){
        if(cursorNode != null){
            if(cursorNode.nextLeft != null)
                this.getNodesArray(cursorNode.nextLeft);

            if(cursorNode.nextRight != null)
                this.getNodesArray(cursorNode.nextRight);

            this.nodesValue.push(cursorNode.value);
        } else 
            return;
    }

    prepareNodesArray(){
        this.nodesValue = [];
        this.getNodesArray(this.cursor);
    }  

    sumSubtreeValues(){
        var tempSum = 0;
        this.nodesValue.forEach(element => {
            tempSum += element;
        });
        return tempSum;
    }

    calculateAverageSubtree(sum){
        return Math.round(sum/this.nodesValue.length * 100) / 100;
    }

    calculateMedianSubtree(){
        const midValue = Math.floor(this.nodesValue.length / 2),
        sortedValues = [...this.nodesValue].sort((a, b) => a - b);
        return this.nodesValue.length % 2 !== 0 ? sortedValues[midValue] : (sortedValues[midValue - 1] + sortedValues[midValue]) / 2;
    }  

    printSubtreeValues() {
        this.prepareNodesArray();
        var sum = this.sumSubtreeValues();
        var average = this.calculateAverageSubtree(sum);
        var median = this.calculateMedianSubtree();

        console.log(
            '\nSum of subtree values - ' + sum,
            '\nAverage of subtree values - ' + average,
            '\nMedian of subtree values - ' + median
        )
    }
}