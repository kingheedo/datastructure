//나보다 작은애들이 왼쪽 나보다 큰애들이 오른쪽
class BinarySearchTree {
  root = null;

  #insert(node,value){
    if(node.value > value){
      // 루트 노드보다 작으면
      if(node.left){
        this.#insert(node.left, value);
      }else{
        node.left = new Node(value);
      }
    }else{
      // 루트 노드보다 크면
      if(node.right){
        this.#insert(node.right, value);
      }else{
        node.right = new Node(value);
      }
    }
  }

  insert(value){  
    //어떤 값을 넣으려할때, 어디에 넣을지 모르겠다.
    //그래서 왼팔 오른팔한테 맡긴다.
    // 만약 왼팔 오른팔이 없으면 거기다 넣는다.
    if(!this.root){
      this.root = new Node(value);
    }else{
      this.#insert(this.root, value);
    }
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
      return false; //지울 값이 존재 안하면 false, 존재하면 true
    }
    if(node.value === value){ //자식 입장
      //지울값을 찾은경우
      if(!node.left && !node.right){
        //leaf
        return null;
      }
      if(!node.right){
        return node.left;
      }
      if(!node.left){
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
      const node = this.#remove(this.root, value);
      if(node){
        this.root = node;
      }
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
const bst = new BinarySearchTree;
bst.insert(8);
bst.insert(5);
bst.insert(10);
bst.insert(4);
bst.insert(3);
bst.insert(2);
bst.remove(3);

