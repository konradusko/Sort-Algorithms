class Game {
    constructor() {
    
    }
    main() {
        let numbOfAr = 25;
        const ar = ArrayGe.getArray(numbOfAr);
        console.log(ar)
        const canvas = new Canvas(ar);
        const draw = new Draw(canvas,ar,100/numbOfAr);
        draw.drawArray();
    }
}

const game = new Game();
game.main();
