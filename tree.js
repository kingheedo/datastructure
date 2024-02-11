class Tree {
  constructor(value){
    this.root = new Node(value);
  }
}

class Node{
  children = [];
  constructor(value){
    this.value = value;
  }

  push(value){
    this.children.push(new Node(value));
  }
}

const tree = new Tree(1);
tree.root.push(2);
tree.root.push(3);
tree.root.children[0].push(4);
tree.root.children[1].push(5);
