function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    if (email === "" || password === "") {
      alert("Please fill out all fields!");
      return false;
    }
    return true;
  }
  
  function validateSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const hint = document.getElementById('signup-hint').value;
  
    if (name === "" || email === "" || password === "" || hint === "") {
      alert("All fields are required!");
      return false;
    }
    return true;
  }
  
  function showHint() {
    alert("Password hint will be displayed if stored in the backend.");
  }
  