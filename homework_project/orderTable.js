import { GoToUrl } from "./goToUrl.js";
import { MakeAlertMenu } from "./makeAlertMenu.js";
import { MakeAlert } from "./makeAlert.js";

let goingToUrl_3 = new GoToUrl("userData.html", "btnDelivery_2");

let goingToUrl_4 = new GoToUrl("index.html", "btnMainPage");

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

let tables = [
  { tableNumber: "table#1", forHowManyPeople: "2 persons", id: "1" },
  { tableNumber: "table#2", forHowManyPeople: "4 persons", id: "2" },
  { tableNumber: "table#3", forHowManyPeople: "2 persons", id: "3" },
  { tableNumber: "table#4", forHowManyPeople: "6 persons", id: "4" },
  { tableNumber: "table#5", forHowManyPeople: "6 persons", id: "5" },
  { tableNumber: "table#6", forHowManyPeople: "2 persons", id: "6" },
  { tableNumber: "table#7", forHowManyPeople: "4 persons", id: "7" },
  { tableNumber: "table#8", forHowManyPeople: "4 persons", id: "8" },
  { tableNumber: "table#9", forHowManyPeople: "8 persons", id: "9" },
  { tableNumber: "table#10", forHowManyPeople: "2 persons", id: "10" },
  { tableNumber: "table#11", forHowManyPeople: "4 persons", id: "11" },
  { tableNumber: "table#12", forHowManyPeople: "6 persons", id: "12" },
  { tableNumber: "table#13", forHowManyPeople: "6 persons", id: "13" },
  { tableNumber: "table#14", forHowManyPeople: "6 persons", id: "14" },
  { tableNumber: "table#15", forHowManyPeople: "2 persons", id: "15" },
];
let orderedTableId = -1;

class TableReservation {
  constructor() {
    this.allTablesDivs = document.getElementsByClassName("insideTableDiv");
    [...this.allTablesDivs].forEach((Element) => {
      Element.addEventListener("click", (evt) => {
        let clickedElement = evt.target;
        console.log("hello clicked element id is: ", clickedElement.id);

        let clickedElementId = clickedElement.id.substring("btn-".length);

        let orderTableDescriptionDiv = document.getElementById(
          "orderTableDescription"
        );

        if (orderedTableId == -1) {
          // If a table was not ordered yet
          let tableObj = tables.find(
            (element) => element.id == clickedElementId
          );
          console.log("You clicked on: ", tableObj.tableNumber);
          orderedTableId = tableObj.id;
          console.log(orderedTableId);

          orderTableDescriptionDiv.innerHTML =
            "Your order for tonight is  " +
            [tableObj.tableNumber] +
            " and its for " +
            [tableObj.forHowManyPeople] +
            ", enjoy";

          clickedElement.style.background = "green";
        } // if table was ordered
        else if (clickedElementId == orderedTableId) {
          orderedTableId = -1;
          orderTableDescriptionDiv.innerHTML = "Table order canceled";
          setTimeout(() => {
            orderTableDescriptionDiv.innerHTML = "";
          }, 1500);
          clickedElement.style.background = "gray";
        } else {
          clickedElement.style.background = "red";
          setTimeout(() => {
            clickedElement.style.background = "gray";
          }, 1500);
        }
      });
    });
  }
}

let TableReservation1 = new TableReservation();
