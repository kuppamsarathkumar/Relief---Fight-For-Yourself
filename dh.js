// Define variables to hold the public parameters and secret key
var p, g, a;

// Generate the public key based on the user input
function generatePublicKey() {
	// Get the user input
	p = Number(document.getElementById("p").value);
	g = Number(document.getElementById("g").value);
	a = Number(document.getElementById("a").value);
	
	// Calculate the public key
	var A = Math.pow(g, a) % p;
	
	// Display the public key on the web page
	document.getElementById("b").value = "";
	document.getElementById("s").value = "";
	document.getElementById("a").readOnly = true;
	document.getElementById("b").readOnly = false;
	document.getElementById("s").readOnly = true;
	document.getElementById("b").focus();
	document.getElementById("b").select();
	document.getElementById("b").placeholder = A;
}

// Generate the shared secret key based on the other party's public key
function generateSharedSecret() {
	// Get the other party's public key
	var B = Number(document.getElementById("b").value);
	
	// Calculate the shared secret key
	var s = Math.pow(B, a) % p;


	// Display the shared secret key on the web page
	document.getElementById("s").value = s;
}