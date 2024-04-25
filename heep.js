//최대힙(위가 크고 아래가 작다) *삽입 삭제는 o(logn), 조회는 o(n), 삭제는 root만 삭제가능
//최대힙은 삭제할때마다 큰 숫자가 나오므로 내림차순 정렬, 정렬 시간복잡도: o(nlogn)

//최소힙(위가 작고 아래가 크다)
//최소힙은 삭제할때마다 작은 숫자가 나오므로 오름차순 정렬, 정렬 시간복잡도: o(nlogn)

//바이너리 서치 트리 (왼쪽 작고 오른쪽 크다)
//힙의 특징 => complete binary tree의 특징을 갖는다 (왼쪽부터 채워지는 형태의 트리);
//특정인덱스의 자식 찾기 => 왼쪽:(해당인덱스 * 2) + 1 , 오른쪽:(해당인덱스 * 2) + 2;
//특정인덱스의 부모 찾기 => Math.floor((해당인덱스 - 1)/2);
class Maxheap{
  arr = [];

  
  #reheapup(index){ //부모 노드가 자식 노드보다 크게 만드는 과정 
    if(index > 0){
      const parentIndex = Math.floor((index - 1) / 2) //부모 인덱스
      if(this.arr[index] > this.arr[parentIndex]){
        //현재값이 부모값보다 크면 값을 서로 바꿔주기
        const temp = this.arr[parentIndex];
        this.arr[parentIndex] = this.arr[index];
        this.arr[index] = temp;
        this.#reheapup(parentIndex);
      }
    }
  }  

  insert(value){
    const index = this.arr.length;
    this.arr[this.arr.length] = value;
    this.#reheapup(index);
  }

  #reheapDown(index){
    const leftIndex = (index * 2) + 1;
    if(leftIndex < this.arr.length){
      const rightIndex = (index * 2) + 2;
      const biggerIndex = (this.arr[leftIndex] || 0) > (this.arr[rightIndex] || 0) ? leftIndex : rightIndex;
      if(this.arr[index] < this.arr[biggerIndex]){
        let temp = this.arr[biggerIndex];
        this.arr[biggerIndex] = this.arr[index];
        this.arr[index] = temp;
        this.#reheapDown(biggerIndex);
      }
    }
  }

  //root만 remove
  removeRoot(){
    if(this.arr.length === 0){
      return false;
    }
    if(this.arr.length === 1){
      return this.arr.pop();
    }
    const root = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.#reheapDown(0);
    return root;
  }
  
  sort(){
    const sortedArray = [];
    while(this.arr.length > 0){
      sortedArray.push(this.removeRoot());
    }
    return sortedArray;
  }

  search(value){
    for(let i =0; i<this.arr.length; i++){
      if(this.arr[i] === value){
        return i;
      }
    }

    return null;
  }

  #heapify(index){// 시간복잡도 o(n)
    const leftIndex = (index * 2) + 1;
    const rightIndex = (index * 2) + 2;
    const biggerIndex = (this.arr[leftIndex] || 0) > (this.arr[rightIndex] || 0) ? leftIndex : rightIndex;
    if(this.arr[index] < this.arr[biggerIndex]){
      let temp = this.arr[index];
      this.arr[index] = this.arr[biggerIndex];
      this.arr[biggerIndex] = temp;
    }
  }

  update(value, newValue){
    const targetIndex = this.search(value);
    if(targetIndex === null){
      return false;
    }
    this.arr[targetIndex] = newValue;
    for(let i = Math.floor((this.arr.length / 2) - 1); i >= 0; i--){
      this.#heapify(i);
    }
  }

  removeValue(value){ //특정 값 삭제
    const targetIndex = this.search(value);
    if(targetIndex === null){
      return false;
    }
    this.arr.splice(targetIndex, 1);
    for(let i = Math.floor((this.arr.length / 2) -1); i >= 0; i--){
      this.#heapify(i);
    }
  }

}
class Node{
  constructor(value){
    this.value = value;
  }
}
const heap = new Maxheap();
heap.insert(8);
heap.insert(19);
heap.insert(23);
heap.insert(32);
heap.insert(45);
heap.insert(56);
heap.insert(78);
heap.update(23,90);
