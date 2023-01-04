export class GoToUrl {
  constructor(url, elementId) {
    this.url = url;
    this.elementId = elementId;
    document.getElementById(this.elementId).addEventListener("click", () => {
      location.href = this.url;
    });
  }
}
