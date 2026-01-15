//your JS code here. If required.
let submit = document.getElementById("submit")
let fn = document.getElementById("First Name")
let ln = document.getElementById("Last Name")
let pn = document.getElementById("Phone Number")
let EmailID = document.getElementById("Email ID")
submit.addEventListener("click",()=>{
	alert("First Name: " + fn.value + "\n" +
    "Last Name: " + ln.value + "\n" +
    "Phone Number: " + pn.value + "\n" +
    "Email ID: " + EmailID.value)
})