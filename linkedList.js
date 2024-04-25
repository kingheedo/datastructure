class LinkedList {
  head = null;
  length = 0;

  add(value){
    if(this.head){  
      //head가 있을때
      let current = this.head;
      while(current.next){
        //while문으로 next가 있을 때까지 head를 이동
        current = current.next;
      }
      current.next = new Node(value);
    }else{
      //head가 없을때
      this.head = new Node(value);
    }

    this.length ++;
    return this.length;
  }

    #search(index){
    let cnt = 0;
    let prev; 
    let current = this.head;
    while(cnt < index){
      prev = current;
      current = current.next;
      cnt++;
    }
    //prev는 index에 해당하는 값 바로 전의 노드 current는 찾고자하는 인덱스의 노드
    return [prev, current];
  }
  
  remove(index){
    if(!this.head){
      //head가 있을때
      return null;
    }
    const [prev, current] = this.#search(index);
    if(prev){
      prev.next = current.next;
    }else{
      this.head = current.next;
    }

    this.length --;
    return this.length;
  }

  search(index){
    const current = this.#search(index)[1];
    return current.value;
  }

  get length(){
    return this.length;
  }
}

class Node{
  next = null;
  constructor(value){
    this.value = value;
  }
}

const li = new LinkedList();
li.add(1);
li.add(2);
li.add(3);
li.remove(0);
li.remove(1);
console.log('search', li.search(0));


