import { GoToUrl } from "./goToUrl.js";

let goingToUrl_5 = new GoToUrl("index.html", "btnMainPage_2");

class UserData {
  firstName;
  lastName;
  email;
  streetAddress;
  cityAddress;
  btnSubmitUserData;
  constructor() {
    this.btnSubmitUserData = document.getElementById("submitUserData");
  }

  activateListener() {
    if (this.btnSubmitUserData == null) {
      return;
    }
    this.btnSubmitUserData.addEventListener("click", this);
  }

  saveData() {
    let array = [
      this.firstName,
      this.lastName,
      this.email,
      this.streetAddress,
      this.cityAddress,
    ];

    let jsonArray = JSON.stringify(array);

    localStorage.setItem("myArray", jsonArray);
  }

  executeForm() {
    console.log("In executeForm");

    this.firstName = document.getElementById("fname").value;
    this.lastName = document.getElementById("lname").value;
    this.email = document.getElementById("email").value;
    this.streetAddress = document.getElementById("street").value;
    this.cityAddress = document.getElementById("city").value;

    let is_valid_form = true;
    if (this.firstName.trim() == "") {
      document.getElementById("error1").style.display = "block";
      is_valid_form = false;
    } else {
      document.getElementById("error1").style.display = "none";
    }

    if (this.lastName.trim() == "") {
      document.getElementById("error2").style.display = "block";
      is_valid_form = false;
    } else {
      document.getElementById("error2").style.display = "none";
    }

    if (this.email.trim() == "") {
      document.getElementById("error3").style.display = "block";
      is_valid_form = false;
    } else {
      document.getElementById("error3").style.display = "none";
    }

    if (this.streetAddress.trim() == "") {
      document.getElementById("error4").style.display = "block";
      is_valid_form = false;
    } else {
      document.getElementById("error4").style.display = "none";
    }

    if (this.cityAddress.trim() == "") {
      document.getElementById("error5").style.display = "block";
      is_valid_form = false;
    } else {
      document.getElementById("error5").style.display = "none";
    }

    if (!is_valid_form) {
      return;
    }

    if (
      this.cityAddress.trim() == "Tel Aviv" ||
      this.cityAddress.trim() == "Petah Tikva"
    ) {
      this.saveData();

      location.href = "menu.html";
    } else {
      alert(
        "We are not getting to " +
          this.cityAddress +
          ", we are only getting to Petah Tikva or Tel Aviv."
      );
    }
  }

  handleEvent(e) {
    if (e.type == "click") {
      this.executeForm();
    }
  }
}

var userData = new UserData();
userData.activateListener();
