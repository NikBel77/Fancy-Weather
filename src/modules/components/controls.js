import Component from "./component";

export default class Controls extends Component {

    constructor(fragment) {
        
        super(fragment);

        this.targetClass = 'controls';
        this.wrapper = this.createWrapper(this.targetClass);

        this.elements = {

            panel: { tag: 'div', class: 'controls__panel' },
            search: { tag: 'div', class: 'controls__search' }

        };
        this.createElements(this.elements, this.wrapper);

        this.panelElements = {

            buttonImg: { tag: 'button', class: 'controls__btn-img' },
            buttonLang: { tag: 'button', class: 'controls__btn-lang' },
            buttonDeg: { tag: 'button', class: 'controls__btn-deg' }

        };
        this.createElements(this.panelElements, this.elements.panel.link);

        this.searchElements = {

            searchInput: { tag: 'input', class: 'controls__inp' },
            searchBtn: { tag: 'button', class: 'controls__btn-search' }

        }
        this.createElements(this.searchElements, this.elements.search.link);

    }

}