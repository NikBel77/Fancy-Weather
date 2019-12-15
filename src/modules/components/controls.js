import Component from "./component"

export default class Controls extends Component {

    constructor(fragment) {
        
        super(fragment);

        this.targetClass = 'controls';
        this.wrapper = this.createWrapper(this.targetClass);

        this.controlElements = {

            panel: { tag: 'div', class: 'controls__panel', link: null },
            search: { tag: 'div', class: 'controls__search', link: null }

        };
        this.appendElementsToFragment(this.controlElements, this.wrapper);

        this.panelElements = {

            buttonImg: { tag: 'button', class: 'controls__btn-img', link: null },
            langSwitcher: { tag: 'div', class: 'controls__lang', link: null },
            buttonCel: { tag: 'button', class: 'controls__btn-cel', link: null },
            buttonFar: { tag: 'button', class: 'controls__btn-far', link: null }

        };
        this.appendElementsToFragment(this.panelElements, this.controlElements.panel.link);

        this.langElements = {

            currentLang: { tag: 'span', link: null },
            arrow: { tag: 'span', link: null },
            langsList: { tag: 'li', class: 'controls__lang-list', link: null }

        }
        this.appendElementsToFragment(this.langElements, this.panelElements.langSwitcher.link);
        this.langElements.langsList.link.classList.add('no-visible');

        this.listOflangs = {

            ru: { tag: 'ul', link: null },
            eng: { tag: 'ul', link: null }

        }
        this.appendElementsToFragment(this.listOflangs, this.langElements.langsList.link);
        this.listOflangs.ru.link.innerText = 'ru';
        this.listOflangs.eng.link.innerText = 'eng';

        this.searchElements = {

            voiceSearchBtn: { tag: 'button', class: 'controls__voice-btn', link: null },
            searchInput: { tag: 'input', class: 'controls__inp', link: null },
            searchBtn: { tag: 'button', class: 'controls__btn-search', link: null }

        }
        this.appendElementsToFragment(this.searchElements, this.controlElements.search.link);

    }

}