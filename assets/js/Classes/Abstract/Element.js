export class Element{
    /**
     * constructor for icon
     * @param className
     */
    constructor(className) {
        this.element = document.createElement('div');
        this.element.classList.add(className);
    }

    /**
     * return icon
     * @returns {HTMLDivElement}
     */
    getElement() {
        return this.element;
    }
}