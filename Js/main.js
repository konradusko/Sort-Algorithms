class Game {
    constructor() {
        this.numbOfAr = 900;
        this.canvas;
        this.ar;
        this.draw;
        this.sort;
    }
    main() {
        this.ar = ArrayGe.getArray(this.numbOfAr);
        this.canvas = new Canvas(this.ar);
        this.draw = new Draw(this.canvas, this.ar, 100 / this.numbOfAr);
        this.draw.drawArray();
    }
    buttons() {
        const insertionsort = document.getElementById("Insertionsort").addEventListener("click", e => {
            this.sort = new Insertionsort(this.canvas, this.ar, 100 / this.numbOfAr);
            this.sort.sort();
        });
        const bubbleSort = document.getElementById("BubbleSort").addEventListener("click", e => {
            this.sort = new Bubblesort(this.canvas, this.ar, 100 / this.numbOfAr);
            this.sort.sort();
        });
        const getArr = document.getElementById("GetArray").addEventListener("click", e => {
            this.numbOfAr = 30;
            this.main();
        });
    }
}
const game = new Game();
game.main();
game.buttons();