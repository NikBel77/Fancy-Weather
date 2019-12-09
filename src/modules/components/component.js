export default class Component {

    createWrapper(className) {
        
        const wrapper = document.createElement('div');
        wrapper.classList.add(className);
        document.querySelector('.app__inner').appendChild(wrapper);

    }
}