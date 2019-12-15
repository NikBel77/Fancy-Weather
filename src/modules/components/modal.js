export default class Modal {
    constructor() {
        this.loadModal = document.createElement('div');
        this.loadIcon = document.createElement('div');

        this.loadModal.classList.add('modal');
        this.loadIcon.classList.add('modal__icon');

        this.loadModal.appendChild(this.loadIcon);
        document.body.appendChild(this.loadModal);

        this.loadModal.addEventListener('animationend', this.endAnimation);
        this.loadIcon.addEventListener('animationend', this.endAnimation);
    }

    removeModal() {
        this.loadIcon.style.animation = 'fold .2s ease-in';
        this.loadModal.style.animation = 'hide .2s linear .2s';
    }

    showModal() {
        this.loadModal.classList.remove('no-visible');
        this.loadIcon.classList.remove('no-visible');

        this.loadIcon.style.animation = 'spin 1.4s linear infinite';
        this.loadModal.style.animation = 'show .2s linear';
    }

    endAnimation(e) {
        e.stopPropagation();
        if (e.animationName === 'fold' || e.animationName === 'hide') {
            e.target.classList.add('no-visible');
        }
    }
}
