export class Stack {
  top = null;
  length = 0;

  push(value){
    const newNode = new Node(value); //new Node 생성 후 할당
    newNode.next = this.top; //new Node의 next는 현재 top
    this.top = newNode; //top을 new Node로 재할당
    this.length++;
    return this.length;
  }

  pop(){
    if(!this.top){
      return null;
    }
    let tempTop = this.top;
    this.top = this.top.next; //top은 현재 top의 next
    this.length--;
    return tempTop.value;
  }
  
  top(){
    return this.top.value;
  }
}

class Node{
  next = null;
  constructor(value){
    this.value = value;
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.pop();
// stack.pop();

