class Node {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    
    insert_at_begining(data) {
        const node = new Node(data, this.head)
        this.head = node
    }

    print() {
        if(this.head == null) {
            console.log("Linked List is Empty")
            return
        }
        
        let itr = this.head
        let listr = ''

        while(itr) {
            let str = itr.data
            listr += str.toLocaleString() 
            if (itr.next)
                listr += '-->'
                
            itr = itr.next
        }

        console.log(listr)
    }
    
    insert_at_end(data) {
        if(this.head == null) {
            this.head = new Node(data, null)
            return
        }

        let itr = this.head
        while (itr.next){
            itr = itr.next
        }

        itr.next = new Node(data, null)
    }

    insert_values(data_list) {
        this.head = null
        for(let data of data_list)
            this.insert_at_end(data)
    }

    get_length() {
        let count = 0
        let itr = this.head
        while (itr) {
            count += 1
            itr = itr.next
        }
        
        return count
    }

    remove_at(index) {
        if(index < 0 || index >= this.get_length())
            throw new Error("Invalid Index")
        
        if(index == 0) {
            this.head = this.head.next
            return
        }
        
        let count = 0
        let itr = this.head
        while(itr) {
            if(count == index - 1) {
                itr.next = itr.next.next
                break
            }

            itr = itr.next
            count += 1
        }
    }

    insert_at(index, data) {
        if(index < 0 || index >= this.get_length())
            throw new Error("Invalid Index")
        
        if(index == 0) {
            this.insert_at_begining(data)
            return
        }
        
        let count = 0
        let itr = this.head
        while(itr) {
            if (count == index - 1) {
                const node = new Node(data, itr.next)
                itr.next = node
                break
            }

            itr = itr.next
            count += 1
        }
    }
}

li = new LinkedList()
li.insert_values([45, 7, 12, 567, 99])
li.print()
li.insert_at_end(67)
li.print()
li.remove_at(2)
li.print()
li.insert_at(2, 456)
li.print()