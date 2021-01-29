function validateForm1() {
    var a = document.forms["customer_login"]["customer_email"].value;
    var b = document.forms["customer_login"]["customer_password"].value;
    if (a == null || a == "", b == null || b == "") {
      alert("Please Fill In All Required Field");
    }else   {window.location.href='/index.html'};
  }

function validateForm2() {
    var a = document.forms["create_customer"]["first_name"].value;
    var b = document.forms["create_customer"]["last_name"].value;
    var c = document.forms["create_customer"]["email"].value;
    var d = document.forms["create_customer"]["password"].value;
    if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "") {
      alert("Please Fill In All Required Field");
    }else   {window.location.href='/index.html'};
  }