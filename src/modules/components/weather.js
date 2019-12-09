import Component from "./component";

export default class Weather extends Component{

    constructor(wrapperClassName) {

        super(wrapperClassName);

        this.targetClass = 'weather'
        this.createWrapper(this.targetClass);

    }
}