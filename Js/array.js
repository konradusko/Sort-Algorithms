class ArrayGe {
    static getArray(sizeOfArray) {
        let arr = new Array(),
            j, k, i, x;
        for (i = 1; i < sizeOfArray + 1; i++) {
            arr.push({
                "value": i
            })
        }
        for (x = arr.length - 1; x > 0; x--) {
            j = Math.floor(Math.random() * (x + 1));
            k = arr[x];
            arr[x] = arr[j];
            arr[j] = k;
        }
        return arr;
    }
}