import Component from "./component";

export default class Controls extends Component {

    constructor(wrapperClassName) {
        
        super(wrapperClassName);

        this.targetClass = 'controls'
        this.createWrapper(this.targetClass);

    }

}