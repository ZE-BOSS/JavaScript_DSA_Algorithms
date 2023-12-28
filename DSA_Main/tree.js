class TreeNode {
    constructor(data) {
        this.data = data
        this.children = []
        this.parent = null
    }

    get_level() {
        let level = 0
        let p = this.parent

        while(p) {
            level += 1
            p = p.parent
        }

        return level
    }

    print_tree() {
        let spaces = ' ' 
        let prefix
        let i = 0

        while(i < (this.get_level() * 3)) {
            spaces += ' '
            i++
        }

        if(this.parent) {
            prefix = spaces + "|__"
        } else {
            prefix = ""
        }

        console.log(prefix + this.data)
        if(this.children) {
            for (let child of this.children) {
                child.print_tree()
            }
        }
    }

    add_child(child) {
        child.parent = this
        this.children.push(child)
    }
}

function build_product_tree() {
    root = new TreeNode("Electronics")

    laptop = new TreeNode("Laptop")
    laptop.add_child(new TreeNode("Mac"))
    laptop.add_child(new TreeNode("Surface"))
    laptop.add_child(new TreeNode("Thinkpad"))

    iPhone = new TreeNode("iPhone")
    iPhone.add_child(new TreeNode("iPhone_12"))
    iPhone.add_child(new TreeNode("iPhone_7"))
    iPhone.add_child(new TreeNode("iPhone_15"))

    cellphone = new TreeNode("Cell Phone")
    cellphone.add_child(iPhone)
    cellphone.add_child(new TreeNode("Google Pixel"))
    cellphone.add_child(new TreeNode("Vivo"))

    tv = new TreeNode("TV")
    tv.add_child(new TreeNode("Samsung"))
    tv.add_child(new TreeNode("LG"))

    root.add_child(laptop)
    root.add_child(cellphone)
    root.add_child(tv)

    console.log({"data": root.data, "children": root.children, "parent": root.parent})
    console.log({"data": laptop.data, "children": laptop.children, "parent": laptop.parent})
    console.log({"data": cellphone.data, "children": cellphone.children, "parent": cellphone.parent})
    console.log({"data": tv.data, "children": tv.children, "parent": tv.parent})
    console.log({"data": iPhone.data, "children": iPhone.children, "parent": iPhone.parent})

    root.print_tree()
}

build_product_tree()