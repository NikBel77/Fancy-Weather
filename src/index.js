import './style/main.scss'
import './style/icons/owfont-regular.css'
import App from './modules/application'

console.time('timer');

const app = new App();

app.init();

console.timeEnd('timer');