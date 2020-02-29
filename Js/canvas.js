class Canvas {
    constructor(arr) {
        this.container = document.querySelector('.container_for_canvas');
        this.canvas = document.querySelector('canvas');
        this.canvas.width = window.innerWidth *0.9;
        this.canvas.height = window.innerHeight *0.8;
        this.ctx = this.canvas.getContext('2d');
        this.arr = arr.length;
    }
    get canvasHeight() {
        return this.canvas.getBoundingClientRect().height;
    }
    get canvasWidth() {
        return this.canvas.getBoundingClientRect().width;
    }
    get withOfLine() {
        return this.canvas.getBoundingClientRect().width / this.arr - this.canvas.getBoundingClientRect().width / this.arr * 0.2;
    }
    get widthOfSpace() {
        return this.canvas.getBoundingClientRect().width / this.arr * 0.2;
    }
}