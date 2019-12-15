export default class VoiceSearchAPI {

    constructor() {

        window.SpeechRecognition = window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        this.rec = new SpeechRecognition();
        this.rec.interimResults = true;

    }

}