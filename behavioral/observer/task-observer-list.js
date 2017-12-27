class ObserverList {
    constructor() {
        this.observerList = []
    }

    add(obj) {
        return this.observerList.push(obj)
    }

    removeAt(index) {
        this.observerList.splice(index, 1)
    }

    indexOf(observer, startIndex) {
        let i = startIndex
        while (i < this.observerList.length) {
            if (this.observerList[i] === observer) {
                return i;
            }
            i++;
        }
        return -1;
    }

    get(index) {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index]
        }
    }

    count() {
        return this.observerList.length;
    }
}

module.exports = ObserverList;