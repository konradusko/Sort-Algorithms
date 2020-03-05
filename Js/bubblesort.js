class Bubblesort extends Draw {
    constructor(canvas, arr, x) {
        super(canvas, arr, x);
        this.tmp;
        this.count = 0;
        this.exchange = 0;
        this.verified = 0;
    }
    sort() {
        const goSort = setInterval(() => {
            this.verified += 1;
            for (let i = this.arr.length - 1; i > 0; i--) {
                if (this.arr[i - 1] != undefined && this.arr[i - 1].value > this.arr[i].value) {
                    this.tmp = this.arr[i - 1];
                    this.arr[i - 1] = this.arr[i];
                    this.arr[i] = this.tmp;
                    this.count += 1;
                    this.arr[i - 1].color = "gray";
                    this.arr[i].color = "gray";
                    this.exchange += 1;
                } else if (this.arr[i - 1] != undefined && this.arr[i - 1].value < this.arr[i].value) {
                    this.arr[i - 1].color = "green";
                    this.arr[i].color = "green";
                }
                this.clearCanvas();
                this.drawArray();

                
            }
            if (this.count == 0) {
                clearInterval(goSort)
                this.tmp = 0;
                console.log("Elementy zostały zamienione: " + this.exchange + " razy!");
                console.log("Tablica została sprawdzona:" + this.verified + " razy!");
                const colorAfterSort = setInterval(() => {
                    if (this.arr[this.arr.length - 1 - this.tmp] != undefined) {
                        this.arr[this.arr.length - 1 - this.tmp].color = "blue";
                        this.clearCanvas();
                        this.drawArray();
                        this.tmp += 1;
                    } else {
                        clearInterval(colorAfterSort);
                    }
                }, 5);
            } else {
                this.count = 0;
            }
        }, 250);
    }
}