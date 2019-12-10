import Component from "./component";

export default class Forecast extends Component{

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'forecast';
        this.wrapper = this.createWrapper(this.targetClass);

    }
}