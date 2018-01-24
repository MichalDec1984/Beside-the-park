document.addEventListener("DOMContentLoaded", function(event) {
//Hamburger menu
    console.log("DOM fully loaded and parsed");
  class Modal {
    constructor(selectorName, modalContentsSelector) {
      this.self = document.querySelector(selectorName);
      this.modalContent = document.querySelector(modalContentsSelector);
      this.isOpen = false;
      this._init();
    }
    _init() {
      var modalNodeInstance = document.createElement('div');
      modalNodeInstance.id = 'modal-instance-' + Math.floor(Math.random()*100000);
      this.modalElement = document.createElement('div');
      this.modalElement.classList.add('js-modal');
      var modalInnerElement = document.createElement('div');
      var modalContent = this.modalContent.cloneNode(true);
      modalInnerElement.appendChild(modalContent);
      document.body.appendChild(modalNodeInstance);
      this.modalElement.appendChild(modalInnerElement);
      modalNodeInstance.appendChild(this.modalElement);
      this.self.addEventListener('click', () => {
        if(this.isOpen) {
          this.close();
        }
        else {
          this.open();
        }
      });
    }
    open() {
      this.isOpen = true;
      this.self.classList.add('is-open');
      this.modalElement.classList.add('open');
    }
    close() {
      this.isOpen = false;
      this.self.classList.remove('is-open');
      this.modalElement.classList.remove('open');
    }
  }
  var menuModal = new Modal('#js-hamburger_menu', '#js-modal_menu_content');

 });