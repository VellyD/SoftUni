class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(elemenent) {
        this.collection.push(elemenent)
        this.size += 1
    }

    remove(index) {
        if (index >= this.collection.length || index <0) {
            return
        }
        this.collection.splice(index, 1)
        this.size -= 1
    }

    get(index) {
        if (index >= this.collection.length || index <0) {
            return
        }
        let result = this.collection.sort((a, b) => a - b)

        return result[index];
    }


}
let list =new List();
list.add(7);
list.add(5);
list.add(6);


console.log(list.get(1));
list.remove(1);
console.log(list.get(1));