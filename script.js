//your JS code here. If required.
let submit = document.getElementById("submit")
let fn = document.getElementById("fn")
let ln = document.getElementById("ln")
let pn = document.getElementById("nn")
let ei = document.getElementById("ei")
submit.addEventListener("click",()=>{
	alert("First Name:" fn.value, "Last Name:" ln.value,
		 "Phone Number:" pn.value, "Email ID:" ei.value)
})