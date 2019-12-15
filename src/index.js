import "@babel/polyfill";
import './style/main.scss';
import './vendor/icons/owfont-regular.css';
import App from './modules/application';

const app = new App();

app.init();
