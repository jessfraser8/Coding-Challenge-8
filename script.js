document.getElementById("registrationForm").addEventListener("submit",(event)=>{
    event.preventDefault();

    //set values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    let meal;
    if(document.getElementById("meal1").checked){
        meal = "Vegetarian"
    } else if(document.getElementById("meal2").checked){
        meal = "Non-Vegetarian"
    } else if(document.getElementById("meal3").checked){
        meal = "Vegan"
    } else {
        meal = ""
    };

    //Validate all fields are filled out.
    if(name === "" || email === "" || date === "" || meal === "") {
        //Display an alert if a field is missing.
        alert("Please fill out all fields before submitting.")
    } else {
        //Display submitted feedback if submitted correctly.
        //Add formatting to displyed text.
        document.getElementById("registrationSummary").innerHTML =`
        <h3>Registration Details:</h3>
       <strong>Name:</strong> ${name}<p>
       <strong>Email:</strong> ${email}<p>
       <strong>Date:</strong> ${date}<p>
       <strong> Meal preference:</strong> ${meal}
        `
    };

    document.getElementById("registrationForm").reset();
});