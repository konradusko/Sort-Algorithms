class Insertionsort extends Draw {
    constructor(canvas, arr, x) {
        super(canvas, arr, x);
        this.sortedArray = [this.arr.shift()];
        this.sortedArray[0].color = "green";
        this.tmpLenght = this.arr.length + 1;
        this.notSortArray = this.arr;
        this.arr = [];
    }
    sort() {
        const goSort = setInterval(() => {
            if (this.sortedArray.length < this.tmpLenght) {
                this.notSortArray[0].color = "green";
                this.sortedArray.push(this.notSortArray[0]);
                this.notSortArray.splice(0, 1);
                this.sortedArray.sort((a, b) => a.value - b.value);
                this.arr = this.sortedArray.concat(this.notSortArray);
                this.clearCanvas();
                this.drawArray();
                this.arr = [];
            } else {
                clearInterval(goSort)
                console.log("done")
            }
        }, 5);
    }
}