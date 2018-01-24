"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function (event) {
  //Hamburger menu
  console.log("DOM fully loaded and parsed");

  var Modal = function () {
    function Modal(selectorName, modalContentsSelector) {
      _classCallCheck(this, Modal);

      this.self = document.querySelector(selectorName);
      this.modalContent = document.querySelector(modalContentsSelector);
      this.isOpen = false;
      this._init();
    }

    _createClass(Modal, [{
      key: "_init",
      value: function _init() {
        var _this = this;

        var modalNodeInstance = document.createElement('div');
        modalNodeInstance.id = 'modal-instance-' + Math.floor(Math.random() * 100000);
        this.modalElement = document.createElement('div');
        this.modalElement.classList.add('js-modal');
        var modalInnerElement = document.createElement('div');
        var modalContent = this.modalContent.cloneNode(true);
        modalInnerElement.appendChild(modalContent);
        document.body.appendChild(modalNodeInstance);
        this.modalElement.appendChild(modalInnerElement);
        modalNodeInstance.appendChild(this.modalElement);
        this.self.addEventListener('click', function () {
          if (_this.isOpen) {
            _this.close();
          } else {
            _this.open();
          }
        });
      }
    }, {
      key: "open",
      value: function open() {
        this.isOpen = true;
        this.self.classList.add('is-open');
        this.modalElement.classList.add('open');
      }
    }, {
      key: "close",
      value: function close() {
        this.isOpen = false;
        this.self.classList.remove('is-open');
        this.modalElement.classList.remove('open');
      }
    }]);

    return Modal;
  }();

  var menuModal = new Modal('#js-hamburger_menu', '#js-modal_menu_content');
});