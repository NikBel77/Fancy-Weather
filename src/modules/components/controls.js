import Component from "./component";

export default class Controls extends Component {

    constructor(wrapperClassName) {
        
        super(wrapperClassName);

        this.targetClass = 'controls'
        this.createWrapper(this.targetClass);

        this.elements = {

            panel: { tag: 'div', class: 'controls__panel' },
            search: { tag: 'div', class: 'controls__search' }

        };
        this.createElements(this.elements, this.targetClass);

        this.panelElements = {

            buttonImg: { tag: 'button', class: 'controls__btn-img' },
            buttonLang: { tag: 'button', class: 'controls__btn-lang' },
            buttonDeg: { tag: 'button', class: 'controls__btn-deg' }

        };
        this.createElements(this.panelElements, this.elements.panel.class);

        this.searchElements = {

            searchInput: { tag: 'input', class: 'controls__inp' },
            searchBtn: { tag: 'button', class: 'controls__btn-search' }

        }
        this.createElements(this.searchElements, this.elements.search.class);

    }

}