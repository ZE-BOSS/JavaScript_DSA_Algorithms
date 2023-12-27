class HashTable{
    constructor() {
        this.MAX = 10
        this.arr = []
        for(let i = 0; i < this.MAX; i++)
            this.arr.push([])
    }
        
    get_hash(key) {
        let hash = 0
        for(let char of key)
            hash += char.charCodeAt(0)
        return hash % this.MAX
    }
    
    __getitem__(key) {
        const arr_index = this.get_hash(key)
        for(let kv of this.arr[arr_index])
            if(kv[0] == key)
                return kv
    }
            
    __setitem__(key, val) {
        const h = this.get_hash(key)
        let found = false
        for(let [idx, element] of this.arr[h]) {
            if (element.length == 2 && element[0] == key) {
                this.arr[h][idx] = [key, val]
                found = true
            }
        }

        if(!found)
            this.arr[h].push([key, val])
    }
        
    __deleteitem__(key) {
        const arr_index = this.get_hash(key)
        const remaining = []
        for (let [index, element] of this.arr[arr_index]) {
            if(index != key) {
                console.log("del", index)
                remaining.push(this.arr[arr_index][index])
            }
        }

        this.arr[arr_index] = remaining
    }
}

ht = new HashTable()
ht.__setitem__("march 6", 130)
console.log(ht.__getitem__("march 6"))
console.log(ht.arr)
ht.__deleteitem__("march 6")
console.log(ht.__getitem__("march 6"))
console.log(ht.arr)