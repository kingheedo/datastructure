class Queue {
  head = null;
  tail = null;
  length = 0;
 
  enqueue(value){
    const newNode = new Node(value);
    if(this.head){
      this.tail.next = newNode;
      this.tail = newNode;
    }else{
      this.tail = newNode;
      this.head = newNode;
    }
    this.length ++;
    return this.length;
  }

  dequeue(){
    if(!this.head){
      return null;
    }

    this.head = this.head.next;
    this.length--;
    return this.length;
  }
}

class Node {
  next = null;
  constructor(value){
    this.value = value;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
