import { GoToUrl } from "./goToUrl.js";
import { MakeAlertMenu } from "./makeAlertMenu.js";
import { MakeAlert } from "./makeAlert.js";

let goingToUrl_1 = new GoToUrl("userData.html", "btnDelivery");

let goingToUrl_2 = new GoToUrl("orderTable.html", "btnOrderTable");

let newMakeAlertMenu = new MakeAlertMenu(
  "btnGoToMenu",
  "The site is under construction, you can see the menu through the delivery feature"
);

let newMakeAlert = new MakeAlert(
  "btnGallery",
  "The site is under construction, you can try the 'Delivery' and 'Order a table' features"
);

let newMakeAlert_2 = new MakeAlert(
  "btnAbout",
  "The site is under construction, you can try the 'Delivery' and 'Order a table' features"
);
