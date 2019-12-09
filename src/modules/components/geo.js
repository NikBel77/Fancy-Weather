import Component from "./component";

export default class Geo extends Component{

    constructor(wrapperClassName) {

        super(wrapperClassName);

        this.targetClass = 'geo'
        this.createWrapper(this.targetClass);

    }
}