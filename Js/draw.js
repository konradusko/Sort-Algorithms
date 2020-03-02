class Draw {
    constructor(canvas, arr,x) {
        this.ctx = canvas.ctx;
        this.height = canvas.canvasHeight;
        this.width = canvas.canvasWidth;
        this.arr = arr;
        this.sizeOfLine = canvas.withOfLine;
        this.sizeOfSpace = canvas.widthOfSpace;
        this.x =x;
    }
    drawArray() {
        let num = this.sizeOfSpace/2;
        for (let i = 0; i < this.arr.length; i++) {
            this.ctx.fillStyle = this.arr[i].color;
            this.ctx.fillRect(num, 0, this.sizeOfLine, Math.floor((this.arr[i].value/100)*this.height) *this.x );
            this.arr[i].x = num;
            num += this.sizeOfLine + this.sizeOfSpace;
        }
    }
    clearCanvas(){
        this.ctx.clearRect(0,0,this.width,this.height);
    }


}