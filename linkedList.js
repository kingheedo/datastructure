class LinkedList {
  head = null;
  length = 0;

  add(value){
    if(this.head){  
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = new Node(value);
    }else{
      this.head = new Node(value);
    }

    this.length ++;
    return this.length;
  }

  remove(index){
    if(!this.head){
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
    let cnt = 0;
    let current = this.head;
    while(cnt < index){
      current = current.next;
      cnt++;
    }
    return current.value;
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
    return [prev, current]
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


