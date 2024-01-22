class MaxBinaryHeap {
  constructor() {
    this.valuse = [];
  }

  insert(element) {
    this.valuse.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.valuse.length - 1;
    const element = this.valuse[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.valuse[parentIdx];

      if (element <= parent) break;

      this.valuse[parentIdx] = element;
      this.valuse[idx] = parent;

      idx = parentIdx;
    }
  }
}

const heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.valuse);
