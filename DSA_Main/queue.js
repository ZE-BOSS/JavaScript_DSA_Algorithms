const { DoubleLinkedListDeque, CircularArrayDeque } = require("./package/deque")

class Queue {
    constructor() {
        //this.buffer = new DoubleLinkedListDeque()
        this.buffer = new CircularArrayDeque() //more relieable for what we are trying to do
    }

    enqueue(val) {
        this.buffer.addFront(val)
    }

    dequeue() {
        return this.buffer.removeBack()
    }
    
    is_empty() {
        return this.buffer.size == 0
    }
    
    size() {
        return this.buffer.size
    }
}

pq = new Queue()

pq.enqueue({
    'company': 'Wall Mart',
    'timestamp': '15 apr, 11.01 AM',
    'price': 131.10
})
pq.enqueue({
    'company': 'Wall Mart',
    'timestamp': '15 apr, 11.02 AM',
    'price': 132
})
pq.enqueue({
    'company': 'Wall Mart',
    'timestamp': '15 apr, 11.03 AM',
    'price': 135
})

console.log(pq.buffer)
console.log(pq.size())
console.log(pq.dequeue())
console.log(pq.buffer)
console.log(pq.dequeue())
console.log(pq.buffer)
console.log(pq.dequeue())
console.log(pq.buffer)
console.log(pq.is_empty())