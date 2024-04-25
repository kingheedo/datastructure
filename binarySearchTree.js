//나보다 작은애들이 왼쪽 나보다 큰애들이 오른쪽
export class BinarySearchTree {
  root = null;
  length = 0;
  #insert(node,value){
    if(node.value > value){
      // 루트 노드보다 작으면
      if(node.left){
        if(node.left.value === value){
          console.log(`${value}값은 이미 존재하는 값입니다.`)
          return
        }
        this.#insert(node.left, value);
      }else{
        node.left = new Node(value);
        this.length++;
      }
    }else{
      // 루트 노드보다 크면
      if(node.right){
        if(node.right.value === value){
          console.log(`${value}값은 이미 존재하는 값입니다.`)
          return
        }
        this.#insert(node.right, value);
      }else{
        node.right = new Node(value);
        this.length++;
      }
    }
  }

  insert(value){  
    //어떤 값을 넣으려할때, 어디에 넣을지 모르겠다.
    //그래서 왼팔 오른팔한테 맡긴다.
    // 만약 왼팔 오른팔이 없으면 거기다 넣는다.
    if(!this.root){
      this.root = new Node(value);
      this.length ++;
    }else{
      this.#insert(this.root, value);
    }
    //숙제 이미 있는값을 넣을경우 에러처리(alert,throw)
  }

  #search(node,value){
    if(node.value > value){
      if(!node.left){
        return null;
      }
      if(node.left.value === value){
        return node.left;
      }
      return this.#search(node.left, value);
    }else{
      if(!node.right){
        return null;
      }
      if(node.right.value === value){
        return node.right;
      }
      return this.#search(node.right, value);
    }
  };

  search(value){
    if(!this.root){
      return null
    }
    if(this.root.value === value){
      return this.root;
    }
    return this.#search(this.root, value);
  }
  
  #remove(node,value){
    if(!node){
      //제거할 값이 bst에 존재하지 않는경우
      return null; //지울 값이 존재 안하면 false, 존재하면 true
    }
    if(node.value === value){ //자식 입장
      //지울값을 찾은경우
      if(!node.left && !node.right){
        //leaf
        this.length--;
        return null;
      }
      if(!node.right){
        this.length--;
        return node.left;
      }
      if(!node.left){
        this.length--;
        return node.right;
      }
      if(node.left && node.right){
        let exchange = node.left;
        while(exchange.right){
          exchange = exchange.right;
        }
        let temp = node.value;
        node.value = exchange.value;
        exchange.value = temp; 
        node.left = this.#remove(node.left,temp);
        return node;
      }

    }else{
      if(node.value > value){//부모 입장
        if(!node.left){
          return null;
        }
        node.left = this.#remove(node.left, value);
        return node;
      }else{
        if(!node.right){
          return null;
        }
        node.right = this.#remove(node.right, value);
        return node;
    }

  }
}
  remove(value){
    //1. leaf(양팔 x) => 제거
    //2. leaf x 왼팔이 없다 => 오른팔 끌어올리기
    //3. leaf x 오른팔이 없다 => 왼팔 끌어올리기
    //3. leaf x 양팔 다 있다. 왼팔에서 가장 큰 애와 바꾼다, leaf를 지운다.
    if(!this.root){
      return null;
    }else{
      this.root = this.#remove(this.root, value);
      return this.length; // 숙제로 length 리턴
    }
  }
}

class Node{ 
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}
// const bst = new BinarySearchTree;
// bst.insert(8);
// bst.insert(10);
// bst.insert(10);
// bst.insert(3);
// bst.insert(1);
// bst.insert(6);
// bst.insert(7);
// bst.insert(4);
// bst.insert(14);
// bst.insert(13);
// console.log('remove',bst.remove(8));
// console.log('remove',bst.remove(10));


