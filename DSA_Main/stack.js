const { DoubleLinkedListDeque, CircularArrayDeque } = require("./package/deque")

class stack {
    constructor() {
        //this.container = new DoubleLinkedListDeque()
        this.container = new CircularArrayDeque() //more relieable for what we are trying to do
    }

    push(val) {
        this.container.addBack(val)
    }

    pop() {
        return this.container.removeBack()
    }

    peek() {
        return this.container.peekBack()
    }

    is_empty() {
        return this.container.size == 0 //doesn't work on DoubleLinkedListDeque
    }
    
    size() {
        return this.container.size //doesn't work on DoubleLinkedListDeque
    }
}

s = new stack()
s.push(5)
console.log(s.peek())
console.log(s.container)
console.log(s.pop())
console.log(s.container)
console.log(s.is_empty())
s.push(7)
s.push(5)
s.push(73)
console.log(s.peek())
console.log(s.container)
console.log(s.size())