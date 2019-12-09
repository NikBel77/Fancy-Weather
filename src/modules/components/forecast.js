import Component from "./component";

export default class Forecast extends Component{

    constructor(wrapperClassName) {

        super(wrapperClassName);

        this.targetClass = 'forecast'
        this.createWrapper(this.targetClass);

    }
}