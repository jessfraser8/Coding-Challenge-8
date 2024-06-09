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
        document.getElementById("registrationSummary").innerHTML =`
        Name: ${name}<p>
        Email: ${email}<p>
        Date: ${date}<p>
        Meal preference: ${meal}
        `
    };

    document.getElementById("registrationForm").reset();
});