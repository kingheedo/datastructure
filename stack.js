class Stack {
  top = null;
  length = 0;

  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this.length;
  }

  pop(){
    if(!this.top){
      return null;
    }
    this.top = this.top.next;
    this.length--;
    return this.length;
  }
}

class Node{
  next = null;
  constructor(value){
    this.value = value;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.pop();

