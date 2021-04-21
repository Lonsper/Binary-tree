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