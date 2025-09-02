// An ideal data type to use when you have an array that you want to traverse
// any number of times and when you get to the end of the array you return to the
// beginning of the array and can continue moving through the array. Similarly,
// you can traverse the array backwards, and when you reach the beginning of the
// array you are returned to the end of the array.
//
// Properties
// ----------
// _data[array]: an array that stores the values you want to traverse
// index[int]: an integer that stores the current index that you are
// visiting
// length[int]: the length of the array of values
//
// Methods
// -------
// currentIndex(): returns the current index in the array
// current(): returns the current item in the array and resets the
// current index to the next index
// currentItem(): returns the current item in the array but does not
// reset the current index
//
// nextIndex(): returns the next index in the array
// next(): returns the next item in the array and resets the current index
//      - if the current item is the last item in the array, this method
//      returns the first item in the array and resets index to 0
// nextItem(): returns the next item in the array but does not reset the
// current index
// moveNext(): resets the current index to the next index but only returns
// undefined
//
// previousIndex(): returns the previous index in the array
// previous(): returns the previous item in  the array and resets the current
// index
//      - if the current item is the first item in the array, this method
//      returns the last item in the array and resets the index to the
//      maximum possible index in the array
// previousItem(): returns the previous item in the array but does not reset
// the current index
// movePrevious(): resets the current index to the previous index but only
// returns undefined
//
// set(data[array]): changes the data stored in the array to the new data array
//
// push(item[any]): adds item to the end of the array
//
// values(): returns all values in the SlidingArray as an array this.index
class SlidingArray {
    constructor(data = [], startIndex = 0) {
        this._data = data;
        this._index = startIndex;
        this._length = data.length;
    }

    currentIndex() {
        if (!this._length) {
            return undefined;
        }
        return this._index;
    }

    current() {
        let index = this.currentIndex();
        this._index = this.nextIndex();
        return this._data[index];
    }

    currentItem() {
        return this._data[this.currentIndex()];
    }

    nextIndex() {
        if (!this._length) {
            return undefined;
        }
        return this._index >= this._length - 1 ? 0 : this._index + 1;
    }

    next() {
        this._index = this.nextIndex();
        return this._data[this._index];
    }

    nextItem() {
        return this._data[this.nextIndex()];
    }

    moveNext() {
        this._index = this.nextIndex();
    }

    previousIndex() {
        if (!this._length) {
            return undefined;
        }
        return this._index <= 0 ? this._length - 1 : this._index - 1;
    }

    previous() {
        this._index = this.previousIndex();
        return this._data[this._index];
    }

    previousItem() {
        return this._data[this.previousIndex()];
    }

    movePrevious() {
        this._index = this.previousIndex();
    }

    set(data, startIndex = 0) {
        this._data = data;
        this._length = data.length;
        this._index = startIndex;
    }

    push(item) {
        this._data.push(...item);
        this._length++;
    }

    // Modify this to return an array starting on current index
    values() {
        return this._data;
    }
}

class SlidingWindow {
    constructor(node = document.getElementsByClassName("sliding-option-widget")[0],
                color = "black",
                hoverColor = "#333333",
                arrowColor = "transparent",
                leftArrowSelector = ".sliding-option-left-arrow i",
                rightArrowSelector = ".sliding-option-right-arrow i") {
        this.node = node;
        this.color = color;
        this.hoverColor = hoverColor;
        this.arrowColor = arrowColor;
        this.leftArrowSelector = leftArrowSelector;
        this.rightArrowSelector = rightArrowSelector;
        this.options = new SlidingArray(node.getElementsByClassName("sliding-option"), 0);
        this.current = this.options.currentItem();
        this.left = node.querySelectorAll(this.leftArrowSelector)[0];
        this.right = node.querySelectorAll(this.rightArrowSelector)[0];
        this.length = this.options._length;
        this.left.addEventListener("click", this.moveLeft.bind(this));
        this.right.addEventListener("click", this.moveRight.bind(this));
        // this.left.addEventListener("load", () => {
            // const svgDoc = this.left.getSVGDocument();
            // svgDoc.querySelector("svg #arrow").style.fill = this.arrowColor;
            // svgDoc.querySelector("svg path").style.fill = this.color;
            // svgDoc.querySelector("svg path").style.transition = "all .5s";
            // const svgElement = svgDoc.querySelector('svg');
            // svgElement.addEventListener("click", this.moveLeft.bind(this));
            // svgElement.addEventListener("mouseover", e => {
            //     e.target.style.cursor = "pointer";
            //     svgDoc.querySelector('svg path').style.fill = this.hoverColor;
            // });
            // svgElement.addEventListener("mouseout", e => {
            //     e.target.style.cursor = "default";
            //     svgDoc.querySelector("svg path").style.fill = this.color;
            // });
        // });
        // this.right.addEventListener("load", () => {
        //     const svgDoc = this.right.getSVGDocument();
        //     svgDoc.querySelector("svg #arrow").style.fill = this.arrowColor;
        //     svgDoc.querySelector("svg path").style.fill = this.color;
        //     svgDoc.querySelector("svg path").style.transition = "all .5s";
        //     const svgElement = svgDoc.querySelector('svg');
        //     svgElement.addEventListener("click", this.moveRight.bind(this));
        //     svgElement.addEventListener("mouseover", e => {
        //         e.target.style.cursor = "pointer";
        //         svgDoc.querySelector('svg path').style.fill = this.hoverColor;
        //     });
        //     svgElement.addEventListener("mouseout", e => {
        //         e.target.style.cursor = "default";
        //         svgDoc.querySelector("svg path").style.fill = this.color;
        //     });
        // });
    }
    build() {
        this.options.moveNext();
        for (let i = 0; i < this.length - 1; i++) {
            this.options.current().style.display = "none";
        }
        this.current.style.display = "block";
    }
    moveLeft() {
        let previous = this.options.previous();

        this.current = previous;
        this.build();
    }
    moveRight() {
        let next = this.options.next();

        this.current = next;
        this.build();
    }
}