 const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const subName = document.getElementById("btn1");
    const fullName = document.getElementById("Greeting");

    function cap(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    subName.addEventListener("click", function () {
      const firstname = firstName.value.trim();
      const lastname = lastName.value.trim();

      if (firstname === "" || lastname === "") {
        alert("Invalid name input");
        return;
      }

      const first = cap(firstname);
      const last = cap(lastname);
      const fullGreet = `Hello ${first} ${last}!!!`;

     
      fullName.innerText = fullGreet;
    
})




