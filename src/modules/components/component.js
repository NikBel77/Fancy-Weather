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

        for (let key in objElements) {

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

    addTextToElements(currentLang) {

        for (let elements in currentLang) {
            for (let elem in currentLang[elements]) {

                this[elements][elem].link.innerText = currentLang[elements][elem];

            }
        }

    }

}