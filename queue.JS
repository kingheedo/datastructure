export class Queue {
  head = null;
  tail = null;
  length = 0;
  //head는 
  enqueue(value){
    const newNode = new Node(value);
    if(this.head){
      //헤드가 있을 때
      this.tail.next = newNode; //tail, head 모두 같은 노드를 참조하므로 head의 next에도 newNode가 추가
      this.tail = newNode; //tail은 마지막 노드를 보도록 재할당
    }else{
      //헤드가 없을때
      this.tail = newNode; //tail,head 같은 노드를 참조 하도록 newNode할당
      this.head = newNode; //tail,head 같은 노드를 참조 하도록 newNode할당
    }
    this.length ++;
    // return this.length;
  }

  dequeue(){
    if(!this.head){
      return null;
    }
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    return temp.value;
  }

  front(){
    return this.head.value;
  }
}


class Node {
  next = null;
  constructor(value){
    this.value = value;
  }
}

const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.dequeue();
// console.log('val',queue.front());
