const BinaryTree = require('../binary-tree');
const assert = require('assert');

describe('Enum Side Test', () => {
    it('side.LEFT equal 0', () => {
        assert.equal(side.LEFT, 0);
    });
    it('side.RIGHT equal 1', () => {
        assert.equal(side.RIGHT, 1);
    });
    it('side.BACK equal 2', () => {
        assert.equal(side.BACK, 2);
    })
});

describe('Class BinaryTree Test', () => {
    it('root parent equal null', () =>{
        let treeInstance = new BinaryTree(1);
        assert.equal(treeInstance.root.parent, null);
    });

    it('root value equal 1', () =>{
        let treeInstance = new BinaryTree(1);
        assert.equal(treeInstance.root.value, 1);
    });

    it('add left leaf to tree', () =>{
        let treeInstance = new BinaryTree(5);
        treeInstance.addNode(4, side.LEFT);
        assert.equal(treeInstance.root.nextLeft.value, 4);
    });

    it('add right leaf to tree', () =>{
        let treeInstance = new BinaryTree(5);
        treeInstance.addNode(6, side.RIGHT);
        assert.equal(treeInstance.root.nextRight.value, 6);
    });

    it('overwrite right leaf', () =>{
        let treeInstance = new BinaryTree(5);
        treeInstance.addNode(4, side.LEFT);
        treeInstance.addNode(5, side.LEFT);
        assert.notEqual(treeInstance.root.nextLeft.value, 4);
        assert.equal(treeInstance.root.nextLeft.value, 5);
    });

    it('check leaf parent', () =>{
        let treeInstance = new BinaryTree(5);
        treeInstance.addNode(4, side.LEFT);
        assert.equal(treeInstance.root.nextLeft.parent.value, 5);
    });

    it('check cursor moving left, right and back', () =>{
        let treeInstance = new BinaryTree(1);
        treeInstance.addNode(2, side.LEFT);
        treeInstance.addNode(3, side.RIGHT);

        treeInstance.moveCursor(side.LEFT);
        assert.equal(treeInstance.cursor.value, 2);
        
        treeInstance.moveCursor(side.BACK);
        assert.equal(treeInstance.cursor.value, 1);
        
        treeInstance.moveCursor(side.RIGHT);
        assert.equal(treeInstance.cursor.value, 3);

        treeInstance.moveCursor(side.BACK);
        assert.equal(treeInstance.cursor.value, 1);
    });

    it('rewrite nodes value to list', () =>{
        let treeInstance = new BinaryTree(1);
        treeInstance.addNode(2, side.LEFT);
        treeInstance.addNode(3, side.RIGHT);

        treeInstance.prepareNodesArray();
        treeInstance.nodesValue = [...treeInstance.nodesValue].sort((a, b) => a - b);
        
        for(i = 0; i<treeInstance.nodesValue.length; i++)
            assert.equal(treeInstance.nodesValue[i], i+1);
    });

    it('check sum of nodes', () =>{
        let treeInstance = new BinaryTree(1);
        treeInstance.addNode(2, side.LEFT);
        treeInstance.addNode(3, side.RIGHT);

        treeInstance.prepareNodesArray();
        
        assert.equal(treeInstance.sumSubtreeValues(), 6);
    });

    it('check average of nodes', () =>{
        let treeInstance = new BinaryTree(1);
        treeInstance.addNode(2, side.LEFT);
        treeInstance.addNode(3, side.RIGHT);

        treeInstance.prepareNodesArray();
        var sum = treeInstance.sumSubtreeValues();
        
        assert.equal(treeInstance.calculateAverageSubtree(sum), 2);
    });

    it('check median of nodes', () =>{
        let treeInstance = new BinaryTree(1);
        treeInstance.addNode(2, side.LEFT);
        treeInstance.addNode(3, side.RIGHT);

        treeInstance.prepareNodesArray();
        
        assert.equal(treeInstance.calculateMedianSubtree(), 2);
    });

});