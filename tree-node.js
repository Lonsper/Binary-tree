module.exports = class TreeNode {
    constructor(value, parent) {
        this.value = value;
        this.parent = parent;
        this.nextLeft = null;
        this.nextRight = null;
    }
}