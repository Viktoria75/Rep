function Nav() {
    var x = document.getElementById("navbar");
    if (x.className == "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  function openLogin() {
    document.getElementById("LoginPopup").style.display = "block";
  }
  
  function closeLogin() {
    document.getElementById("LoginPopup").style.display = "none";
  }

  function openDescription() {
    document.getElementById("Description").style.display = "flex";
  }
  
  function closeDescription() {
    document.getElementById("Description").style.display = "none";
  }