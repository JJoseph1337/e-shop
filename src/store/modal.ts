import { makeAutoObservable } from "mobx";

class Modal {
  showModal = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}

export default new Modal();
