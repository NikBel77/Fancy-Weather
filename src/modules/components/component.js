export default class Component {

    constructor(wrapperClassName) {

        this.wrapperClassName = wrapperClassName;

    }

    createWrapper(className) {
        
        const wrapper = document.createElement('div');
        wrapper.classList.add(className);
        document.querySelector('.' + this.wrapperClassName).appendChild(wrapper);

    }
}