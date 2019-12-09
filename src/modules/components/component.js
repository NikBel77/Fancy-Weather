export default class Component {

    constructor(wrapperClassName) {

        this.wrapperClassName = wrapperClassName;

    }

    createWrapper(className) {
        
        const wrapper = document.createElement('div');
        wrapper.classList.add(className);
        document.querySelector('.' + this.wrapperClassName).appendChild(wrapper);

    }

    createElements(objElements, parentClassName) {

        const parrent = document.querySelector('.' + parentClassName);
        for (let key in objElements) {

            const element = document.createElement(objElements[key].tag);
            element.classList.add(objElements[key].class);
            parrent.appendChild(element);

        }

    }
}