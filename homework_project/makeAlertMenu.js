export class MakeAlertMenu {
  constructor(elementId, alertText) {
    this.alertText = alertText;
    this.elementId = elementId;
    document.getElementById(this.elementId).addEventListener("click", () => {
      alert(this.alertText);
      location.href = "userData.html";
    });
  }
}
