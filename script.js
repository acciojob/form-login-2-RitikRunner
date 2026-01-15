//your JS code here. If required.
let submit = document.getElementById("submit")
let fn = document.getElementById("fn")
let ln = document.getElementById("ln")
let pn = document.getElementById("nn")
let ei = document.getElementById("ei")
submit.addEventListener("click",()=>{
	alert("First Name: " + fn.value + "\n" +
    "Last Name: " + ln.value + "\n" +
    "Phone Number: " + pn.value + "\n" +
    "Email ID: " + ei.value)
})