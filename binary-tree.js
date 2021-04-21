module.exports = side = {
    LEFT : 0,
    RIGHT : 1,
    BACK : 2
}

class Node {
    constructor(value, parent){
        this.value = value;
        this.parent = parent;
        this.nextLeft = null;
        this.nextRight = null;
    }
}

module.exports = class BinaryTree {
    constructor(rootValue) {
        this.root = new Node(rootValue, null);
        this.cursor = this.root;
        this.nodesValue = [];
    }

    addNode(value, side) {
        switch (side) {
            case 0 : this.cursor.nextLeft = new Node(value, this.cursor);
                break;
            case 1 : this.cursor.nextRight = new Node(value, this.cursor);
                break;
            default : console.log('Wrong side - addNode() error!');
        }
    }

    moveCursor(side) {
        switch (side) {
            case 0 : this.cursor = this.cursor.nextLeft;
                break;
            case 1 : this.cursor = this.cursor.nextRight;
                break;
            case 2 : this.cursor = this.cursor.parent;
                break;
            default : console.log('Wrong direction - moveCursor() error!');
        }
    }

    printTree() {
        this.printAllNodes(this.root);
    }

    printSubtree(cursorNode) {
        this.printAllNodes(cursorNode);
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

    prepareNodesArray(){
        this.nodesValue = [];
    }

    calculateSubtreeValues(cursorNode, currentSum){
        if(cursorNode != null){
            if(cursorNode.nextLeft != null)
                currentSum = this.calculateSubtreeValues(cursorNode.nextLeft, currentSum);

            if(cursorNode.nextRight != null)
                currentSum = this.calculateSubtreeValues(cursorNode.nextRight, currentSum);

            this.nodesValue.push(cursorNode.value);
            return currentSum += cursorNode.value;
        } else {
            return currentSum += 0;
        }
    }

    calculateAverageSubtree(sum){
        return Math.round(sum/this.nodesValue.length * 100) / 100;
    }

    calculateMedianSubtree(){
        const midValue = Math.floor(this.nodesValue.length / 2),
        sortedValues = [...this.nodesValue].sort((a, b) => a - b);
        return this.nodesValue.length % 2 !== 0 ? sortedValues[midValue] : (sortedValues[midValue - 1] + sortedValues[midValue]) / 2;
    }  

    printSubtreeValues(cursorNode) {
        this.prepareNodesArray();
        var sum = this.calculateSubtreeValues(cursorNode, 0);
        var average = this.calculateAverageSubtree(sum);
        var median = this.calculateMedianSubtree();

        console.log(
            '\nSum of subtree values - ' + sum,
            '\nAverage of subtree values - ' + average,
            '\nMedian of subtree values - ' + median
        )
    }
}