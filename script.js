// This is function for form validation
function validation() {
	// Get values from all inputs
	var name = document.getElementById("name").value;
	var num = document.getElementById("num").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	// Check if any of the input is empty
	if (name == "" || num == "" || email == "" || message == "") {
		alert("Error: Please fill up all inputs");
	} else {
		alert("Success: Message Sent");
	}
}
