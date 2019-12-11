import Component from "./component";

export default class Controls extends Component {

    constructor(fragment) {
        
        super(fragment);

        this.targetClass = 'controls';
        this.wrapper = this.createWrapper(this.targetClass);

        this.controlElements = {

            panel: { tag: 'div', class: 'controls__panel', link: null },
            search: { tag: 'div', class: 'controls__search', link: null }

        };
        this.createElements(this.controlElements, this.wrapper);

        this.panelElements = {

            buttonImg: { tag: 'button', class: 'controls__btn-img', link: null },
            buttonLang: { tag: 'button', class: 'controls__btn-lang', link: null },
            buttonDeg: { tag: 'button', class: 'controls__btn-deg', link: null }

        };
        this.createElements(this.panelElements, this.controlElements.panel.link);

        this.searchElements = {

            searchInput: { tag: 'input', class: 'controls__inp', link: null },
            searchBtn: { tag: 'button', class: 'controls__btn-search', link: null }

        }
        this.createElements(this.searchElements, this.controlElements.search.link);

    }

}