import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="nav-dropdown"
export default class extends Controller {
  static targets = [ "menu" ]
  connect() {
  }

  toggle() {
    debugger
    this.menuTarget.classList.toggle("show");
  }
}
