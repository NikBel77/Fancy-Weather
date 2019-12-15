export default class Component {
    constructor(fragment) {
        this.parentFragment = fragment;
    }

    createWrapper(className) {
        const wrapper = document.createElement('div');
        wrapper.classList.add(className);
        this.parentFragment.appendChild(wrapper);
        return wrapper;
    }

    appendElementsToFragment(objElements, parentElement) {
        for (const key in objElements) {
            const element = document.createElement(objElements[key].tag);

            if ('class' in objElements[key]) {
                element.classList.add(objElements[key].class);
            }
            if ('link' in objElements[key]) {
                objElements[key].link = element;
            }
            parentElement.appendChild(element);
        }
    }

    addTextToElements(data) {
        for (const elements in data) {
            for (const elem in data[elements]) {
                if (elem === 'icon') {
                    this[elements][elem].link.className = (`owf owf-${data[elements][elem]}`);
                } else {
                    this[elements][elem].link.innerText = data[elements][elem];
                }
            }
        }
    }
}
