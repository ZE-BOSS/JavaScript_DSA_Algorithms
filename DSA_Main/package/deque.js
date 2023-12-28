class DoubleLinkedListDeque {
    constructor() {
        this.front = this.back = undefined;
    }
    addFront(value) {
        if (!this.front) this.front = this.back = { value };
        else this.front = this.front.next = { value, prev: this.front };
    }
    removeFront() {
        let value = this.peekFront();
        if (this.front === this.back) this.front = this.back = undefined;
        else (this.front = this.front.prev).next = undefined;
        return value;
    }
    peekFront() { 
        return this.front && this.front.value;
    }
    addBack(value) {
        if (!this.front) this.front = this.back = { value };
        else this.back = this.back.prev = { value, next: this.back };
    }
    removeBack() {
        let value = this.peekBack();
        if (this.front === this.back) this.front = this.back = undefined;
        else (this.back = this.back.next).back = undefined;
        return value;
    }
    peekBack() { 
        return this.back && this.back.value;
    }
}

class CircularArrayDeque {
    constructor() {
        this.data = {}; // Or Array, but that really does not add anything useful
        this.front = 0;
        this.back = 1;
        this.size = 0;
    }
    addFront(value) {
        if (this.size >= Number.MAX_SAFE_INTEGER) throw "Deque capacity overflow";
        this.size++;
        this.front = (this.front + 1) % Number.MAX_SAFE_INTEGER;
        this.data[this.front] = value;
    }
    removeFront()   {
        if (!this.size) return;
        let value = this.peekFront();
        this.size--;
        delete this.data[this.front];
        this.front = (this.front || Number.MAX_SAFE_INTEGER) - 1;
        return value;
    }
    peekFront()     { 
        if (this.size) return this.data[this.front];
    }
    addBack(value) {
        if (this.size >= Number.MAX_SAFE_INTEGER) throw "Deque capacity overflow";
        this.size++;
        this.back = (this.back || Number.MAX_SAFE_INTEGER) - 1;
        this.data[this.back] = value;
    }
    removeBack()   {
        if (!this.size) return;
        let value = this.peekBack();
        this.size--;
        delete this.data[this.back];
        this.back = (this.back + 1) % Number.MAX_SAFE_INTEGER;
        return value;
    }
    peekBack()     { 
        if (this.size) return this.data[this.back];
    }
}

module.exports = { DoubleLinkedListDeque, CircularArrayDeque };

// demo
// let deque = new Deque;
// console.log(deque.peekFront()); // undefined
// deque.addFront(1);
// console.log(deque.peekBack()); // 1
// deque.addFront(2);
// console.log(deque.removeBack()); // 1
// deque.addFront(3);
// deque.addFront(4);
// console.log(deque.peekBack()); // 2
// deque.addBack(5);
// deque.addBack(6);
// console.log(deque.peekBack()); // 6
// console.log(deque.removeFront()); // 4
// console.log(deque.removeFront()); // 3
// console.log(deque.removeFront()); // 2
// console.log(deque.removeFront()); // 5
// console.log(deque.removeFront()); // 6
// console.log(deque.removeFront()); // undefined